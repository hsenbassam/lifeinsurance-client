import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from '../_models/checkout';
import { ShoppingCartService } from '../_services/shopping-cart.service';
import { AuthService } from '../_services/auth.service';
import { Title } from '@angular/platform-browser';

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
    private titleService: Title,
    private _router: Router,
    private cartService: ShoppingCartService,
    private authService: AuthService) {

    this.titleService.setTitle('Life Insurance | Checkout');

    this.checkout = new Checkout();

  }

  ngOnInit() {
    this.cartService.getAll(this.authService.userInfo.id)
      .subscribe(cartProducts => {
        this.cartProducts = cartProducts;
        cartProducts ? this.getTotalPremium() : this._router.navigate(['shopping-cart']);
      });
  }

  getTotalPremium() {
    this.totalPremium = 0;
    this.cartProducts.forEach(item => {
      this.totalPremium += item.premium;
    });
  }

  checkoutProcess(form) {
    localStorage.setItem('invoice-header', JSON.stringify(form));
    this._router.navigate(['payment/confirm']);
  }


}
