import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ShoppingCartService } from '../_services/shopping-cart.service';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  invalidLogin = false;

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private cartService: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
    this.titleService.setTitle("Life Insurance | Login");
  }

  ngOnInit() { }

  loginProcess(form: NgForm) {
    this.authService.login(form.value)
      .subscribe(
        response => {
          if (response) {
            this.invalidLogin = false;
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.checkIfReturnToShoppingCart(returnUrl);
            this.router.navigate([returnUrl || '/'])
          }
          else
            this.invalidLogin = true;
        });

  }

  private checkIfReturnToShoppingCart(returnUrl) {
    if (returnUrl == "shopping-cart") {
      let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
      cartProducts.forEach((cartProduct, index, productsArray) => {
        this.cartService.post(cartProduct, this.authService.userInfo.id)
          .subscribe(response => {
            if (response && index == productsArray.length - 1)
              this.openSnackBar("You add new products to the Cart", "Dismiss")
          });
      });
      localStorage.removeItem("cartProducts")
    }
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}


