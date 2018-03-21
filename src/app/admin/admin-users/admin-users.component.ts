import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import { AppError } from '../../common/app-error';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users : User[];

  tableResource: DataTableResource<User>;
  items: User[] = [];
  itemCount: number;

  constructor(private userService: UserService) {

    this.userService.getAll()
    .subscribe(
      users => {
        this.users = users;
        console.log(this.users);
        this.initializeTable(this.users);
      },
      (error: AppError) => {
        if(error instanceof AppError) {
          console.log("Cannot Fetch The Users");
        }
        else 
          throw error;
    });
  }

  ngOnInit() { }


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
