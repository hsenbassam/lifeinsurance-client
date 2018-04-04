import { Component, OnInit } from '@angular/core';
import { DateFormat } from '../utils/date-format';
import { PaypalPaymentService } from '../_services/paypal.payment.service';
import { AppError } from '../_errors/app-error';
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
    console.log(this.invoiceHeaders)
    console.log(this.cartProducts)

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

  paypalCheckout() {
    if (!confirm("You are redirecting to payment. Would you like to continue?")) return;
    let finalPremium = (this.totalPremium + this.redeem).toFixed(2);
    this.paypalService.makePayment(finalPremium)
      .subscribe(
        response => {
          console.log(response);
          localStorage.setItem("redirect_url", response.redirect_url);
          this.router.navigate(['payment/process']);

        },
        (error: AppError) => {
          if (error instanceof AppError) {
            console.log("Checkout is Failed");
          }
          else
            throw error;
        }
      )

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

  get router() {
    return this._router;
  }


}
