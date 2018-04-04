import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppError } from '../_errors/app-error';
import { RegisterService } from '../_services/register.service';
import { User } from '../_models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import 'rxjs/add/operator/take';

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
  id;
  isAdmin;
  roles;
  url;

  constructor(
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
    if(this._router.url == "/profile"){
      this.userService.get(this.authService.userInfo.id).take(1).subscribe(u => this.user = u);
    }  

    if (this.id) {
      this.userService.get(this.id).take(1).subscribe(u => {
        this.isAdmin = u.roles.includes('ROLE_ADMIN');
        this.roles = u.roles;
        this.user = u
      });
    }

   }


  userProcess(form: NgForm) {
    form.value.birthday = this.datePipe.transform(form.value.birthday, 'yyyy-MM-dd');
    form.value.datecreated = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
   
    if (this.url.includes('/register')) {
      this.registerService.post(form.value)
        .subscribe(
          response => {
            console.log(response);
            this._router.navigate(['/login'])
          },
          (error: AppError) => {
            if (error instanceof AppError) {
              console.log("Registration Failed");
              this.failedRegistration = true;
            }
            else
              throw error;
          });
    }
    else {
      form.value.id = this.id? this.id : this.authService.userInfo.id;
      if(this.id) {
        if(this.isAdmin) {
          if(!this.roles.includes('ROLE_ADMIN')) {
            this.roles.push("ROLE_ADMIN");
          }
        }
        else {
          if(this.roles.includes('ROLE_ADMIN')) {
            this.roles.splice(this.roles.indexOf('ROLE_ADMIN', 0), 1);
          }
        }
        form.value.roles = this.roles;
      }
      console.log(form.value)
      form.value.enabled = this.user.enabled
      this.userService.update(form.value)
        .subscribe(
          response => {
            console.log(form.value)
            this.id? this._router.navigate(['/admin/users']): this._router.navigate(['/']);
            console.log(response);
          },
          (error: AppError) => {
            if (error instanceof AppError) {
              console.log("Editing Profile is Failed");
              this.failedUpdate = true;
            }
            else
              throw error;
          }
        )


    }
  }

  delete() {
    if(!confirm("Are you sure you want to delete this user?")) return;
      
      this.userService.delete(this.id)
      .subscribe(
        response => {
            console.log(response);
            this._router.navigate(['/admin/users']);
        },
        (error: AppError) => {
          if(error instanceof AppError) {
            console.log("Deleting User is Failed");
          }
          else 
            throw error;
        }
      )

  }
}
