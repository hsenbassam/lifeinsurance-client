import { Component, OnInit } from '@angular/core';
import { DateFormat } from '../utils/date-format';
import { PaypalPaymentService } from '../_services/paypal.payment.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../_services/shopping-cart.service';
import { AuthService } from '../_services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  invoiceHeaders;
  currentDate: string;
  cartProducts = [];
  totalPremium: number;
  redeem = 0;

  constructor(
    private titleService: Title,
    private paypalService: PaypalPaymentService,
    private _router: Router,
    private cartService: ShoppingCartService,
    private authService: AuthService) {

    this.titleService.setTitle("Life Insurance | Payment Confirmation");
    this.invoiceHeaders = JSON.parse(localStorage.getItem("invoice-header")) || {};
    this.currentDate = DateFormat.formatDate(new Date());
    this.getTotalPremium()
  }

  ngOnInit() {
    this.cartService.getAll(this.authService.userInfo.id)
      .subscribe(cartProducts => {
        this.cartProducts = cartProducts;
        cartProducts ? this.getTotalPremium() : this._router.navigate(['shopping-cart'])
      });
  }

  paypalCheckout() {
    if (!confirm("You are redirecting to payment. Would you like to continue?")) return;

    let finalPremium = (this.totalPremium + this.redeem).toFixed(2);
    this.paypalService.makePayment(finalPremium)
      .subscribe(
        response => {
          localStorage.setItem("redirect_url", response.redirect_url);
          this._router.navigate(['payment/process']);
        })

  }
  getTotalPremium() {
    this.totalPremium = 0;
    this.cartProducts.forEach(item => {
      this.totalPremium += item.premium;
    });
  }

  print() {
    window.print();
  }

}
