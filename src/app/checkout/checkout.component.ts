import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from '../_models/checkout';
import { ShoppingCartService } from '../_services/shopping-cart.service';
import { AuthService } from '../_services/auth.service';
import { AppError } from '../_errors/app-error';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout: Checkout;
  cartProducts = [];
  totalPremium: number;
  countrySelected: string;
  

  constructor(
    private _router: Router,  
    private cartService: ShoppingCartService,
    private authService: AuthService ) {

      this.checkout = new Checkout();

   }

  ngOnInit() {
    this.cartService.getAll(this.authService.userInfo.id)
    .subscribe(cartProducts => {
      this.cartProducts = cartProducts;
      this.getTotalPremium();
    },
      (error: AppError) => {
        if (error instanceof AppError) {
          console.log("Fetching Shopping Cart Items is Failed/No Items");
        }
        else
          throw error;
      });
  }

  getTotalPremium() {
    this.totalPremium = 0;
    this.cartProducts.forEach(item => {
      this.totalPremium += item.premium;
    });
  }

  checkoutProcess(form) {
    form.payment_method = "PayPal";
    localStorage.setItem('invoice-header', JSON.stringify(form));
    this.router.navigate(['payment/confirm'])
  }

  get router(){
    return this._router;
  }

}
