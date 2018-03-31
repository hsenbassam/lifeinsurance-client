import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ShoppingCartService } from '../_services/shopping-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  invalidLogin = false;

  constructor(
    private authService: AuthService,
    private cartService: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { }

  loginProcess(form: NgForm) {
    this.authService.login(form.value)
      .subscribe(
        response => {
          if (response) {
            this.invalidLogin = false;
            console.log(this.authService.isAuthenticated())
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

            if (returnUrl == "shopping-cart") {
              let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
              let userId = this.authService.userInfo.id;
              cartProducts.forEach(cartProduct => {
                this.cartService.post(cartProduct, userId)
                  .subscribe(response => {
                    console.log("You add new item to your cart");
                  },
                    (error: AppError) => {
                      if (error instanceof AppError) {
                        console.log("Adding Product to a Cart is Failed");
                      }
                      else
                        throw error;
                    });
              });
              localStorage.removeItem("cartProducts")
            }
            this.router.navigate([returnUrl || '/'])
          }
          else
            this.invalidLogin = true;
        },
        (error: AppError) => {
          if (error instanceof AppError) {
            console.log("Login Failed");
            this.invalidLogin = true;
          }
          else
            throw error;
        });




  }
}


