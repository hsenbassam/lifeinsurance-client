import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whole-life-product',
  templateUrl: './whole-life-product.component.html',
  styleUrls: ['./whole-life-product.component.css']
})
export class WholeLifeProductComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Life Insurance | Whole Life Product');
   }

  ngOnInit() {
  }

}
