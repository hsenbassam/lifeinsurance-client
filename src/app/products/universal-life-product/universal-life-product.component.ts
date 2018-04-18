import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-universal-life-product',
  templateUrl: './universal-life-product.component.html',
  styleUrls: ['./universal-life-product.component.css']
})
export class UniversalLifeProductComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Life Insurance | Universal Life Product');
   }

  ngOnInit() {
  }

}
