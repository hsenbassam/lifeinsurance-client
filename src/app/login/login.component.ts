import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppError } from '../common/app-error';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {}

  loginProcess(form: NgForm) {
    this.loginService.post(form.value)
      .subscribe(
        user => {
          this.user = user;
          console.log(this.user);
        },
        (error: AppError) => {
          if(error instanceof AppError) {
            console.log("Expected Error");
          }
          else 
            throw error;
      });

  }
}


