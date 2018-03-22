import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.scss']
})
export class DateDisplayComponent implements OnInit {
  @Input() date: string;
  @Output() dateChange = new EventEmitter<string>();
  today = moment();

  constructor() { }

  dateNextDay() {
    const nextDay = this.today.add(1, 'day').format('DD[/]MM[/]YYYY');
    this.dateChange.emit(nextDay);
  }

  datePreviousDay() {
    const previousDay = this.today.subtract(1, 'day').format('DD[/]MM[/]YYYY');
    this.dateChange.emit(previousDay);
  }

  ngOnInit() {
  }

}
