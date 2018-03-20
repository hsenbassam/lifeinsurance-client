import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TermLifeSimulatorService } from '../services/termlife-simulator.service';
import { AppError } from '../common/app-error';
import { DateFormatter } from 'ngx-bootstrap/datepicker/date-formatter';
import { Quote } from '../models/quote';
import { Rates } from '../models/rates';
import { WholeLifeSimulatorService } from '../services/wholelife-simulator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  completed;
  type: string;
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
  minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 94));
  bsValue: Date = this.maxDate;
  userQuote: Quote;
  rates: Rates;
  countrySelected: string;
  occupationSelected: string;
  service: Observable<any>;


  constructor(
    private datePipe: DatePipe,
    private _router: Router,
    private _route: ActivatedRoute,
    private termLifeService: TermLifeSimulatorService,
    private wholeLifeService: WholeLifeSimulatorService) {

    this._route.queryParams.subscribe(params => this.completed = params['completed']);
    this._route.params.subscribe(params => this.type = params['type']);

    this.userQuote = new Quote();


  }

  ngOnInit() { }


  getQuoteProcess(form: NgForm) {

    form.value.birthday = this.datePipe.transform(form.value.birthday, 'yyyy-MM-dd');
    form.value.country = this.countrySelected;
    form.value.occupation = this.occupationSelected;
    this.userQuote = form.value;
    console.log(this.userQuote);

    if (this.type == "term-life")
      this.service = this.termLifeService.post(form.value);
    if (this.type == "whole-life")
      this.service = this.wholeLifeService.post(form.value);

    this.service.subscribe(
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
        if (error instanceof AppError) {
          console.log("Simulating Quote is Failed");
        }
        else
          throw error;
      }
    )


  }

}
