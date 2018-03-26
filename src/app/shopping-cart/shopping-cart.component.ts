import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts;
  total = 0;

  constructor() {
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    this.getTotalPremium();
   }

  ngOnInit() {
  }

  getTotalPremium() {
    this.cartProducts.forEach(item => {
      this.total += item.premium;
    });
  }

}
