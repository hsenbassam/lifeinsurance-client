import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input("user") user : User;

  constructor() { }

  ngOnInit() {
  }

}
