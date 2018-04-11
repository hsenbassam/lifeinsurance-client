import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[];


  displayedColumns = ['id', 'firstname', 'lastname', 'email', 'datecreated', 'active', 'edit'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll()
      .subscribe(
        users => {
          if (users) {
            this.users = users;
            this.dataSource = new MatTableDataSource(this.users);
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
