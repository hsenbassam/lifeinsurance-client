import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  userQuote : {} = {};

  completed;

  constructor( private datePipe: DatePipe,private _router: Router, private _route: ActivatedRoute) {

    this._route.queryParams.subscribe(params => this.completed = params['completed']);
  }

  ngOnInit() {
  }

  getQuoteProcess(form: NgForm){

    form.value.birthday = this.datePipe.transform(form.value.birthday, 'yyyy-MM-dd');
    form.value.datecreated = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    console.log(form.value);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        completed: 'true'
      }
   });

   localStorage.setItem("quote", JSON.stringify(form.value))



  }

}
