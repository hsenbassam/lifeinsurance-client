import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
import { TermLifeSimulatorService } from '../services/termlife-simulator.service';
import { AppError } from '../common/app-error';
import { DateFormatter } from 'ngx-bootstrap/datepicker/date-formatter';
import { Quote } from '../models/quote';
import { Rates } from '../models/rates';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  completed;
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear()-18));
  minDate = new Date(new Date().setFullYear(new Date().getFullYear()-94));
  bsValue: Date = this.maxDate;
  userQuote : Quote;
  rates: Rates;
  countrySelected: string;
  occupationSelected: string;
  

  constructor(
    private datePipe: DatePipe,private _router: Router,
    private _route: ActivatedRoute,
    private termLifeService: TermLifeSimulatorService) {

    this._route.queryParams.subscribe(params => this.completed = params['completed']);
    this.userQuote = new Quote();
   
   
  }

  ngOnInit() {}


  getQuoteProcess(form: NgForm){

    form.value.birthday = this.datePipe.transform(form.value.birthday, 'yyyy-MM-dd');
    form.value.country = this.countrySelected;
    form.value.occupation = this.occupationSelected;
    this.userQuote = form.value;
    console.log(this.userQuote);
    this.termLifeService.post(form.value)
    .subscribe(
      rates => {
          this.rates = rates;
          this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
              completed: 'true'
            }
         });
      },
      (error: AppError) => {
        if(error instanceof AppError) {
          console.log("Simulating Quote is Failed");
        }
        else 
          throw error;
      }
    )
    

  }

}
