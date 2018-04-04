import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { OrderService } from '../_services/order.service';
import { AppError } from '../_errors/app-error';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit, OnDestroy {

  paymentResponse;

  constructor(
    private titleService: Title,
    public authService: AuthService,
    public orderService: OrderService,
    private snackBar: MatSnackBar) {

    this.titleService.setTitle("Life Insurance | Payment Success");

    this.paymentResponse = JSON.parse(localStorage.getItem("paymentResponse")) || {};
    localStorage.removeItem("redirect_url");
    localStorage.removeItem("invoice-header");
  }

  ngOnInit() {

    this.orderService.add(this.authService.userInfo.id)
      .subscribe(ordersCount => {
        this.openSnackBar("You have now " + ordersCount + " Life Insurance products, Enjoy your Life :)", "Dismiss")
      },
        (error: AppError) => {
          if (error instanceof AppError) {
            console.log("Problem in Adding Orders");
          }
          else
            throw error;
        });
  }
  ngOnDestroy() {
    localStorage.removeItem("paymentResponse");
  }

  print() {
    window.print();
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

}
