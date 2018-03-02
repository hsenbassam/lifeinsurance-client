import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories = [
    { name: "Life Insurance" },
    { name: "Car Insurance" },
    { name: "Property Insurance" }
  ];

  constructor() { }

  ngOnInit() {
  }

  addProduct(form: NgForm) {
    console.log(form.value)
  }

}
