import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quote-result',
  templateUrl: './quote-result.component.html',
  styleUrls: ['./quote-result.component.css']
})
export class QuoteResultComponent implements OnInit {

  quote: any;


  constructor() { 

    this.quote = JSON.parse(localStorage.getItem("quote"))
    console.log(this.quote)
  }

  ngOnInit() {
  }

}
