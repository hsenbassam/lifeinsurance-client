import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../_services/shopping-cart.service';
import { AuthService } from '../_services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts = [];
  totalPremium: number;

  constructor(
    private titleService: Title,
    private cartService: ShoppingCartService,
    public authService: AuthService,
    private snackBar: MatSnackBar) {
    this.titleService.setTitle('Life Insurance | Shopping Cart');
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.cartService.getAll(this.authService.userInfo.id)
        .subscribe(cartProducts => {
          this.cartProducts = cartProducts ? cartProducts : [];
          this.getTotalPremium();
        });
    } else {
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
      this.getTotalPremium();
    }
  }

  getTotalPremium() {
    this.totalPremium = 0;
    this.cartProducts.forEach(item => {
      this.totalPremium += item.premium;
    });
  }
  delete(index) {
    if (!confirm('Are you sure you want to delete this insurance product from the cart?')) return;

    const product = this.cartProducts[index];
    this.cartProducts.splice(index, 1);

    if (this.authService.isAuthenticated()) {
      this.cartService.delete(product.id)
        .subscribe(
          response => {
            if (response) this.openSnackBar('You have deleted a product from the cart', 'Dismiss');
          }
        );
    } else {
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
      this.openSnackBar('You have deleted a product from the cart', 'Dismiss');
    }

    this.getTotalPremium();
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }



}
