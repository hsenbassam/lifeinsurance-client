import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../../models/quote';
import { Rates } from '../../models/rates';

@Component({
  selector: 'quote-result',
  templateUrl: './quote-result.component.html',
  styleUrls: ['./quote-result.component.css']
})
export class QuoteResultComponent implements OnInit {

  //quote: any;
  @Input('quote') quote: Quote;
  @Input('rates') rates: Rates;
  @Input('type') type: string;

  constructor() { 

    this.quote = new Quote();

  }

  ngOnInit() {
      
    console.log(this.quote)
    console.log(this.rates)
  
  }


}
