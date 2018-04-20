import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodLog } from '../shared/models/food-log.model';
import { ProductsService } from '../shared/services/products.service';
import { MealsService } from '../shared/services/meals.service';
import { Product } from '../shared/models/product.model';
import { Meal } from '../shared/models/meal.model';
import { Food } from '../shared/models/food.model';
import { FoodLogService } from '../shared/services/food-log.service';
import * as moment from 'moment';
import { Total } from '../shared/models/total.model';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  foodLog = <FoodLog>{};
  foodLogCreated = false;
  products$: Observable<Product[]>;
  meals$: Observable<Meal[]>;
  today = moment();
  date = this.today.format('DD[/]MM[/]YYYY');
  total = <Total>{};

  constructor(
    private productsService: ProductsService,
    private mealsService: MealsService,
    private foodLogService: FoodLogService) {
    }

  onDateChange(date) {
    this.date = date;
    this.foodLogCreated = false;
    this.getFoodLogData(date);
  }

  getSumOfTotals(value: string) {
    let total = 0;
    for (const property in this.total) {
      if (this.total.hasOwnProperty(property)) {
        total += this.total[property][value];
      }
    }
    return total;
  }

  calculateSumOfTotalValues() {
    this.total.sum = {
      protein: 0,
      carbs: 0,
      fats: 0,
      calories: 0
    };
    this.total.sum = {
      protein: this.getSumOfTotals('protein'),
      carbs: this.getSumOfTotals('carbs'),
      fats: this.getSumOfTotals('fats'),
      calories: this.getSumOfTotals('calories')
    };
  }

  getTotal(value: string, foodCategory: string) {
    return this.foodLog[foodCategory].reduce((a, b) => a + b[value], 0);
  }

  calculateTotalValues() {
    for (const property in this.foodLog) {
      if (this.foodLog.hasOwnProperty(property) && property !== 'date') {
        this.total[property] = {
          protein: this.getTotal('protein', property),
          carbs: this.getTotal('carbs', property),
          fats: this.getTotal('fats', property),
          calories: this.getTotal('calories', property)
        };
      }
    }
  }

  resetTotalValues() {
    const totalValues = ['breakfast', 'lunch', 'dinner', 'snacks', 'sum'];
    for (let i = 0; i < totalValues.length; i++) {
      this.total[totalValues[i]] = {
        protein: 0,
        carbs: 0,
        fats: 0,
        calories: 0
      };
    }
  }

  getFoodLogData(date) {
    this.foodLogService.getFoodLog(date)
      .takeUntil(this.unsubscribe$)
      .subscribe(
        (res) => {
          if (res.length !== 0) {
            this.foodLog = {
              date: this.date,
              breakfast: res[0].breakfast,
              lunch: res[0].lunch,
              dinner: res[0].dinner,
              snacks: res[0].snacks
            };
            this.foodLogCreated = true;
            this.calculateTotalValues();
            this.calculateSumOfTotalValues();
          } else {
            this.resetTotalValues();
            this.foodLog = {
              date: this.date,
              breakfast: [],
              lunch: [],
              dinner: [],
              snacks: []
            };
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  updateFoodLog(food) {
    const foodCategory = food.foodCategory.toLowerCase();
    const foodData = food.foodData;

    const foodLog = Object.assign({}, this.foodLog);
    foodLog[foodCategory] = [...foodLog[foodCategory], foodData];
    if (!this.foodLogCreated) {
      this.foodLogService.addFoodLog(foodLog)
        .takeUntil(this.unsubscribe$)
        .subscribe(
          (res) => {
            this.getFoodLogData(this.date);
          }
        );
        this.foodLogCreated = true;
    } else {
      this.foodLogService.updateFoodLog(foodLog)
        .takeUntil(this.unsubscribe$)
        .subscribe(
          (res) => {
            this.getFoodLogData(this.date);
          }
        );
    }
  }

  deleteFood(deleteData) {
    const category = deleteData.category;
    const foodIndex = deleteData.foodIndex;

    this.foodLog[category].splice(foodIndex, 1);

    this.foodLogService.updateFoodLog(this.foodLog)
      .takeUntil(this.unsubscribe$)
      .subscribe(
        (res) => {
          this.getFoodLogData(this.date);
        }
      );
  }

  ngOnInit() {
    this.resetTotalValues();
    this.getFoodLogData(this.date);

    this.products$ = this.productsService.getProducts();
    this.meals$ = this.mealsService.getMeals();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
