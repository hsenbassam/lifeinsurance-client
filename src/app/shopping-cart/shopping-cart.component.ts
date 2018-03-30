import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../_services/shopping-cart.service';
import { AuthService } from '../_services/auth.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts = [];
  totalPremium: number;

  constructor(private cartService: ShoppingCartService, private authService: AuthService) {
   }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
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

  }
  

  getTotalPremium() {
    this.totalPremium = 0;
    this.cartProducts.forEach(item => {
      this.totalPremium += item.premium;
    });
  }

  delete(index){
    if(!confirm("Are you sure you want to delete this insurance product from the cart?")) return; 

    let product= this.cartProducts[index];
    this.cartProducts.splice(index, 1);
    
    this.cartService.delete(product.id)
    .subscribe(
      response => {
          console.log(response);
      },
      (error: AppError) => {
        if(error instanceof AppError) {
          console.log("Deleting Product from Cart is Failed");
        }
        else 
          throw error;
      }
    )

    this.getTotalPremium();
  }



}
