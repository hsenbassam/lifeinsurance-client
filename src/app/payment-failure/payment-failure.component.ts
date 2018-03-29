import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.component.html',
  styleUrls: ['./payment-failure.component.css']
})
export class PaymentFailureComponent implements OnInit {

  paymentFailure; 
  constructor() {
    this.paymentFailure = JSON.parse(localStorage.getItem("paymentResponse")).issue.message || "";
  }

  ngOnInit() {
  }

}
