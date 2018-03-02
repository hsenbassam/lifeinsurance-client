import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products = [
    {
      id: 1,
      title: "First Product",
      category: "Life Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 500,
    },
    {
      id: 2,
      title: "Second Product",
      category: "Car Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 200,
    },
    {
      id: 3,
      title: "Third Product",
      category: "Life Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 450,
    },
    {
      id: 4,
      title: "Fourth Product",
      category: "Property Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 140,
    },
    {
      id: 5,
      title: "Fifth Product",
      category: "Car Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 350,
    },
    {
      id: 6,
      title: "Sixth Product",
      category: "Car Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 50,
    },
    {
      id: 7,
      title: "Seventh Product",
      category: "Property Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 80,
    },
    {
      id: 8,
      title: "Eighth Product",
      category: "Car Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 170,
    },
    {
      id: 9,
      title: "Nineth Product",
      category: "Life Insurance",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      price: 850,
    }
  ]

  tableResource: DataTableResource<{ title: string, category: string, price: number, description: string }>;
  items: { title: string, category: string, price: number, description: string }[] = [];
  itemCount: number;

  constructor() {
    this.initializeTable(this.products);
  }

  ngOnInit() { }

  ngOnDestroy() { }


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
