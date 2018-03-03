import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';
import { ProductService } from '../../services/product.service';
import { AppError } from '../../common/app-error';
import { Product } from '../../models/product'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{

  products : Product[];

  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {

    this.productService.getAll()
    .subscribe(
      products => {
        this.products = products;
        console.log(this.products);
        this.initializeTable(this.products);
      },
      (error: AppError) => {
        if(error instanceof AppError) {
          console.log("Cannot Fetch The Products");
        }
        else 
          throw error;
    });
  }

  ngOnInit() { }


  filter(query: string) {
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
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
