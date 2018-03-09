import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { AppError } from '../../common/app-error';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};

  constructor( 
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { 

    let id = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.product = this.productService.get(id).take(1).subscribe(p => this.product = p);
    }

    this.categories$ = categoryService.getAll();

  }

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
