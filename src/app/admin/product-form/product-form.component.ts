import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../_services/product.service';
import { AppError } from '../../common/app-error';
import { CategoryService } from '../../_services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Product } from '../../_models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product : Product;
  id;

  constructor( 
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { 

    this.product = new Product();


    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }

    this.categories$ = categoryService.getAll();

  }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log(form.value);
    if(this.id) {
      form.value.id = this.id;
      this.productService.update(form.value)
      .subscribe(
        response => {
            console.log(response);
            this.router.navigate(['/admin/products']);
        },
        (error: AppError) => {
          if(error instanceof AppError) {
            console.log("Updating Product is Failed");
          }
          else 
            throw error;
        }
      )
    }
    else {
    this.productService.post(form.value)
      .subscribe(
        response => {
            console.log(response);
            this.router.navigate(['/admin/products']);
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

  delete() {
    if(!confirm("Are you sure you want to delete this product?")) return;
      
      this.productService.delete(this.id)
      .subscribe(
        response => {
            console.log(response);
            this.router.navigate(['/admin/products']);
        },
        (error: AppError) => {
          if(error instanceof AppError) {
            console.log("Deleting Product is Failed");
          }
          else 
            throw error;
        }
      )

    
  }

}
