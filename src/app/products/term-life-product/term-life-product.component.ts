import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'term-life-product',
  templateUrl: './term-life-product.component.html',
  styleUrls: ['./term-life-product.component.css']
})
export class TermLifeProductComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Life Insurance | Term Life Product');
   }

  ngOnInit() {
  }

}
