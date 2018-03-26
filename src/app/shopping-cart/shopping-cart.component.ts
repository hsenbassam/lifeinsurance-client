import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts;
  total;

  constructor() {
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    this.getTotalPremium();
   }

  ngOnInit() {
  }

  getTotalPremium() {
    this.total = 0;
    this.cartProducts.forEach(item => {
      this.total += item.premium;
    });
  }

  delete(index){
    this.cartProducts.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
    this.getTotalPremium();
  }

}
