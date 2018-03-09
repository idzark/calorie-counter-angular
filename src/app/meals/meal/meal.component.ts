import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Meal } from '../../shared/models/meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnChanges {
  @Input() meal: Meal;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    /* this.meal = this.mealData; */
  }

}
