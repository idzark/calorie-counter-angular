import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../../shared/models/meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  @Input() meal;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  onUpdate(meal: Meal, mealId: string) {
    const updateData = {
      meal: meal,
      mealId: mealId
    };
    this.edit.emit(updateData);
  }

  onDelete(mealId: string) {
    this.delete.emit(mealId);
  }

  ngOnInit() {
  }

}
