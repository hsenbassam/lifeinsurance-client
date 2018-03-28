import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout: {} = {};
  cartProducts;
  totalPremium: number;
  countrySelected: string;
  

  constructor(private _route: Router) {
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    this.getTotalPremium();
   }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem("cartProducts")))
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
    this.route.navigate(['payment/confirm'])
  }

  get route(){
    return this._route;
  }

}
