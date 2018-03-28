import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaypalPaymentService } from '../_services/paypal.payment.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'payment-process',
  templateUrl: './payment-process.component.html',
  styleUrls: ['./payment-process.component.css']
})
export class PaymentProcessComponent implements OnInit {

  redirectUrl:string;
  redirect = false;
  paymentId;
  payerId;

  constructor(private _route: ActivatedRoute, 
              private paypalService: PaypalPaymentService,
              private _router: Router) {
    this.redirectUrl = localStorage.getItem("redirect_url");
    console.log(this.redirectUrl)
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => this.paymentId = params['paymentId']);
    this.route.queryParams.subscribe(params => this.payerId = params['PayerID']);
  }

  paypalPay() {
    if(!confirm("You are redirecting to payment. Would you like to continue?")) return;
    this.redirect = true;
    window.location.href = this.redirectUrl;
  }
  paypalComplete() {
    if(!confirm("You are completing to payment. Would you like to continue?")) return;
    this.paypalService.completePayment(this.paymentId, this.payerId)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['payment/success']);
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
