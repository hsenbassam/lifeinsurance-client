import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';
import { Order } from '../../_models/order';
import { OrderService } from '../../_services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders: Order[];

  displayedColumns = ['timestamp', 'type', 'coverage', 'amount', 'owner', 'premium'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.sort.sort(<MatSortable>{ id: 'timestamp', start: 'desc' });

    this.orderService.getAll()
      .subscribe(
        orders => {
          if (orders) {
            this.orders = orders;
            this.dataSource = new MatTableDataSource(this.orders);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          }
        });
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
