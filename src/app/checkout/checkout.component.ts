import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from '../_models/checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout: Checkout;
  cartProducts;
  totalPremium: number;
  countrySelected: string;
  

  constructor(private _router: Router) {
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    this.getTotalPremium();
   }

  ngOnInit() {
    console.log(this.cartProducts)
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
