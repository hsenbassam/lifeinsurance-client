import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { AppError } from '../../common/app-error';

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

  constructor( private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct(form: NgForm) {
    this.productService.post(form.value)
      .subscribe(
        response => {
            console.log(response)
        },
        (error: AppError) => {
          if(error instanceof AppError) {
            console.log("Adding Product is Failed");
          }
          else 
            throw error;
      }
      )
  }

}
