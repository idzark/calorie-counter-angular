import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodLog } from '../../shared/models/food-log.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FoodAddComponent } from '../food-add/food-add.component';
import { Product } from '../../shared/models/product.model';
import { Meal } from '../../shared/models/meal.model';
import { Food } from '../../shared/models/food.model';
import { Total } from '../../shared/models/total.model';

@Component({
  selector: 'app-food-log',
  templateUrl: './food-log.component.html',
  styleUrls: ['./food-log.component.scss']
})
export class FoodLogComponent implements OnInit {
  @Input() foodLog: FoodLog;
  @Input() products: Product[];
  @Input() meals: Meal[];
  @Input() total: Total;
  @Output() add = new EventEmitter<Food>();
  @Output() delete = new EventEmitter<{ category: string, foodIndex: number }>();

  constructor(
    public dialog: MatDialog) { }

  openDialog(foodCategory: string, foodType: string) {
    const dialogConfig = new MatDialogConfig;

    dialogConfig.data = {
      category: foodCategory,
      type: foodType
    };

    const dialogRef = this.dialog.open(FoodAddComponent, dialogConfig);
    dialogRef.componentInstance.products = this.products;
    dialogRef.componentInstance.meals = this.meals;
    dialogRef.componentInstance.add.subscribe(food => {
      this.addFood(food);
    });
  }

  deleteFood(category: string, foodIndex: number) {
    const deleteData = {
      category,
      foodIndex
    };

    this.delete.emit(deleteData);
  }

  addFood(food: Food) {
    this.add.emit(food);
  }

  ngOnInit() { }

}
