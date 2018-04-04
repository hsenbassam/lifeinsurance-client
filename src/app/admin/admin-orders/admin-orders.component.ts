import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Life Insurance | Administration Mode");
  }

  ngOnInit() {
  }

}
