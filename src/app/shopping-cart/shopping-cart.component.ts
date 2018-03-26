import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts;
  totalPremium: number;

  constructor() {
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    this.getTotalPremium();
   }

  ngOnInit() {
  }

  getTotalPremium() {
    this.totalPremium = 0;
    this.cartProducts.forEach(item => {
      this.totalPremium += item.premium;
    });
  }

  delete(index){
    if(!confirm("Are you sure you want to delete this insurance product?")) return;
    
    this.cartProducts.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
    this.getTotalPremium();
  }

}
