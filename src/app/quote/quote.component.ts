import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';

declare var $: any

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  completed;
  maxDate = new Date();
  bsValue: Date = new Date();
  userQuote : {} = {};

  constructor( private datePipe: DatePipe,private _router: Router, private _route: ActivatedRoute) {

    this._route.queryParams.subscribe(params => this.completed = params['completed']);
  }

  ngOnInit() {
    $(document).ready(function(){
      var current = 1,current_step,next_step,steps;
      steps = $("fieldset").length;
      $(".next").click(function(){
        current_step = $(this).parent();
        next_step = $(this).parent().next();
        next_step.show();
        current_step.hide();
        setProgressBar(++current);
      });
      $(".previous").click(function(){
        current_step = $(this).parent();
        next_step = $(this).parent().prev();
        next_step.show();
        current_step.hide();
        setProgressBar(--current);
      });
      setProgressBar(current);
      // Change progress bar action
      function setProgressBar(curStep){
        var percent = 100 / steps * curStep;
        percent = parseFloat(percent.toFixed());
        $(".progress-bar")
          .css("width",percent+"%")
          .html(percent+"%");   
      }
    });
  }


  getQuoteProcess(form: NgForm){
    

    form.value.birthday = this.datePipe.transform(form.value.birthday, 'yyyy-MM-dd');
    form.value.datecreated = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    this.userQuote = form.value;
    
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        completed: 'true'
      }
   });

  // localStorage.setItem("quote", JSON.stringify(form.value))



  }

}
