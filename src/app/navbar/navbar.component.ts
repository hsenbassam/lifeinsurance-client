import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../_services/shopping-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  cartProducts = [];

  constructor(
    public authService: AuthService,
    private router: Router,
    private cartService: ShoppingCartService) { }

  ngOnInit() {
    // if (this.authService.isAuthenticated()) {
    //   this.cartService.getAll(this.authService.userInfo.id)
    //     .subscribe(cartProducts => this.cartProducts = cartProducts ? cartProducts : []);
    // }
    // else
    //   this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
