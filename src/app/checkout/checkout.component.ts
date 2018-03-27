import { Component, OnInit } from '@angular/core';

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


  constructor() {
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

}
