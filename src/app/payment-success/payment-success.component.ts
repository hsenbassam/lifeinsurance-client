import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit, OnDestroy {

  paymentResponse;

  constructor(public authService: AuthService) {
    this.paymentResponse = JSON.parse(localStorage.getItem("paymentResponse")) || {};
    console.log(this.paymentResponse)
    localStorage.removeItem("redirect_url");
    localStorage.removeItem("invoice-header");
    localStorage.removeItem("cartProducts");
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    localStorage.removeItem("paymentResponse");
  }

  print() {
    window.print();
  }

}
