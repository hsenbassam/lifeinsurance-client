import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {

  @Output('countryChanged') countryChanged : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(countryValue) {
    this.countryChanged.emit(countryValue)
 }




}
