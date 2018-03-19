import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'occupation-select',
  templateUrl: './occupation-select.component.html',
  styleUrls: ['./occupation-select.component.css']
})
export class OccupationSelectComponent implements OnInit {



  @Output('occupationChanged') occupationChanged : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(occupationValue) {
    this.occupationChanged.emit(occupationValue)
 }


}
