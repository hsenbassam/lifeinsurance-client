import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'quote-result',
  templateUrl: './quote-result.component.html',
  styleUrls: ['./quote-result.component.css']
})
export class QuoteResultComponent implements OnInit {

  //quote: any;
  @Input('quote') quote: {amount: number, coverage: number};

  userData = this.quote;


  constructor() { 

  }

  ngOnInit() {

  
  }


}
