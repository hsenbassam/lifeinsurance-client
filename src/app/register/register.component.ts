import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppError } from '../common/app-error';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  maxDate = new Date();
  bsValue: Date = new Date();
  user: User;
  failedRegistration = false;

  constructor(
    private registerService: RegisterService,
    private datePipe: DatePipe,
    private _router: Router) {

    this.user = new User();
   }

  ngOnInit() {}


  registerProcess(form: NgForm) {

    form.value.birthday = this.datePipe.transform(form.value.birthday, 'yyyy-MM-dd');
    form.value.datecreated = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
 
    this.registerService.post(form.value)
    .subscribe(
        response => {
          console.log(response);
          this._router.navigate(['/login'])
      },
        (error: AppError) => {
          if(error instanceof AppError) {
            console.log("Registration Failed");
            this.failedRegistration = true;
          }
          else 
            throw error;
      });
  }
}
