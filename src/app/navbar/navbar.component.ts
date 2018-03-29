import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  cartProducts;

  constructor(public authService: AuthService, private router: Router) {
   
   }

    ngOnInit() {
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
