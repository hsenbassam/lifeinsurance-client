import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.component.html',
  styleUrls: ['./payment-failure.component.css']
})
export class PaymentFailureComponent implements OnInit {

  paymentFailure; 
  constructor(private titleService: Title) {

    this.titleService.setTitle("Life Insurance | Payment Failure");
    this.paymentFailure = JSON.parse(localStorage.getItem("paymentResponse")).issue.message || "";
  }

  ngOnInit() {
  }

}
