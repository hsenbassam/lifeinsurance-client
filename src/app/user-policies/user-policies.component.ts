import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { AuthService } from '../_services/auth.service';
import { Order } from '../_models/order';

@Component({
  selector: 'app-user-policies',
  templateUrl: './user-policies.component.html',
  styleUrls: ['./user-policies.component.css']
})
export class UserPoliciesComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService, private authService: AuthService) { }

  ngOnInit() {

    this.orderService.getAllByUserId(this.authService.userInfo.id)
    .subscribe(orders => this.orders = orders);
  }

}
