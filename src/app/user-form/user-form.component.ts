import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RegisterService } from '../_services/register.service';
import { User } from '../_models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import 'rxjs/add/operator/take';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  maxDate = new Date();
  bsValue: Date = new Date();
  user: User;
  failedRegistration = false;
  failedUpdate = false;
  failedDelete = false;
  id;
  isAdmin;
  roles;
  url;

  constructor(
    private titleService: Title,
    private registerService: RegisterService,
    private userService: UserService,
    private datePipe: DatePipe,
    private _router: Router,
    private _route: ActivatedRoute,
    public authService: AuthService) {

    this.user = new User();
    this.id = this._route.snapshot.paramMap.get('id');
    this.url = _router.url;
  }

  ngOnInit() {
    if (this._router.url == "/profile") {
      this.titleService.setTitle("Life Insurance | Profile");
      this.userService.get(this.authService.userInfo.id).take(1).subscribe(u => this.user = u);
    }
    if (this._router.url == "/register")
      this.titleService.setTitle("Life Insurance | Register");

    if (this.id) {
      this.titleService.setTitle("Life Insurance | Administration Mode");
      this.userService.get(this.id).take(1).subscribe(user => {
        if (user) {
          this.user = user
          this.isAdmin = user.roles.includes('ROLE_ADMIN');
          this.roles = user.roles;
        }
        else
          this._router.navigate(['/not-found'])
      });
    }

  }


  userProcess(form: NgForm) {

    if (this.url.includes('/register')) {
      this.registerService.post(form.value)
        .subscribe(response => response ? this._router.navigate(['/login']) : this.failedRegistration = true);
    }
    else {
      if (this.id) {
        if (this.isAdmin && !this.roles.includes('ROLE_ADMIN'))
          this.roles.push("ROLE_ADMIN");
        if (!this.isAdmin && this.roles.includes('ROLE_ADMIN'))
          this.roles.splice(this.roles.indexOf('ROLE_ADMIN', 0), 1);
        form.value.roles = this.roles;
      }
      form.value.id = this.id ? this.id : this.authService.userInfo.id;
      form.value.enabled = this.user.enabled;
      form.value.birthday = this.datePipe.transform(form.value.birthday, 'yyyy-MM-dd');
      this.userService.update(form.value)
        .subscribe(response => response ? this.id ? this._router.navigate(['/admin/users']) : this._router.navigate(['/']) : this.failedUpdate = true)
    }
  }

  delete() {
    if (!confirm("Are you sure you want to delete this user?")) return;

    this.userService.delete(this.id)
      .subscribe(response => response ? this._router.navigate(['/admin/users']) : this.failedDelete = true)
  }
}
