import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { AppError } from '../../_errors/app-error';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  invalidChangingPassword = false;

  constructor(
    private titleService: Title,
    private authService: AuthService, 
    private userService: UserService, 
    private _router: Router, 
    private snackBar: MatSnackBar) {
      this.titleService.setTitle("Life Insurance | Password Change");
     }

  ngOnInit() {
  }

  changePassword(form) {
    this.userService.changePassword(this.authService.userInfo.id,form.value.oldpass,form.value.newpass)
    .subscribe(response => {
      console.log(response);
      this.openSnackBar("Password has been Changed !", "Dismiss")
      this._router.navigate(['/profile'])
    }, (error: AppError) => {
      if (error instanceof AppError) {
        this.invalidChangingPassword = true;
        console.log("Changing Password Failed");
      }
      else
        throw error;
    }
  )

  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

}
