import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaypalPaymentService } from '../_services/paypal.payment.service';
import { AppError } from '../_errors/app-error';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'payment-process',
  templateUrl: './payment-process.component.html',
  styleUrls: ['./payment-process.component.css']
})
export class PaymentProcessComponent implements OnInit {

  redirectUrl: string;
  redirect = false;
  paymentId;
  payerId;

  constructor(
    private titleService: Title,
    private _route: ActivatedRoute,
    private paypalService: PaypalPaymentService,
    private _router: Router) {

    this.titleService.setTitle("Life Insurance | Payment Process");
    this.redirectUrl = localStorage.getItem("redirect_url") || "";
    console.log(this.redirectUrl)
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.paymentId = params['paymentId']);
    this.route.queryParams.subscribe(params => this.payerId = params['PayerID']);
  }

  paypalPay() {
    if (this.redirectUrl == "") {
      alert("Redirect URL is not valid");
      return;
    }
    if (!confirm("You are redirecting to payment. Would you like to continue?")) return;
    this.redirect = true;
    window.location.href = this.redirectUrl;
  }
  paypalComplete() {
    if (!confirm("You are completing the payment. Would you like to continue?")) return;
    this.paypalService.completePayment(this.paymentId, this.payerId)
      .subscribe(
        response => {
          localStorage.setItem("paymentResponse", JSON.stringify(response));
          if (response.status == "success") {
            this.router.navigate(['payment/success']);
          }
          else
            this.router.navigate(['payment/failure']);

        },
        (error: AppError) => {
          if (error instanceof AppError) {
            console.log("Payment is Failed");
          }
          else
            throw error;
        }
      )

  }

  get route() {
    return this._route;
  }

  get router() {
    return this._router;
  }

}
