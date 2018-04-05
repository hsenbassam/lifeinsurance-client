import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[];

  tableResource: DataTableResource<User>;
  items: User[] = [];
  itemCount: number;

  constructor(private userService: UserService, private titleService: Title) {
    this.titleService.setTitle("Life Insurance | Administration Mode");
  }

  ngOnInit() {
    this.userService.getAll()
      .subscribe(
        users => {
          if (users) {
            this.users = users;
            this.initializeTable(this.users);
          }
        });
  }


  filter(query: string) {
    let filteredProducts = (query) ?
      this.users.filter(p => p.firstname.toLowerCase().includes(query.toLowerCase())) : this.users;
    this.initializeTable(filteredProducts);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  private initializeTable(products) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }


}
