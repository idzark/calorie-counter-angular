import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Meal } from '../../shared/models/meal.model';


@Component({
  selector: 'app-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.scss']
})
export class MealAddComponent implements OnInit {
  @Input() products: Product[];
  @Input() categories: string[];
  @Output() addMeal = new EventEmitter<Meal>();
  meal: Meal = <Meal>{};
  selectedIngredient: Product;
  ingredientAmount: number;
  ingredients: Product[] = <Product[]>[];
  weightTotal: number;
  proteinTotal: number;
  carbsTotal: number;
  fatsTotal: number;
  caloriesTotal: number;
  imageUrl: string;
  selectedCategory: string;

  constructor() { }

  getTotal(value) {
    let total = 0;
    for (let i = 0; i < this.ingredients.length; i++) {
      total = total + this.ingredients[i][value];
    }
    return total;
  }

  calculateTotalValues() {
    this.weightTotal = this.getTotal('weight');
    this.proteinTotal = this.getTotal('protein');
    this.carbsTotal = this.getTotal('carbs');
    this.fatsTotal = this.getTotal('fats');
    this.caloriesTotal = this.getTotal('calories');
  }

  onAddIngredient() {
    this.selectedIngredient.weight = this.ingredientAmount;
    /* this.selectedIngredient.protein = Math.round(this.selectedIngredient.protein * this.selectedIngredient.weight / 100);
    this.selectedIngredient.carbs = Math.round(this.selectedIngredient.carbs * this.selectedIngredient.weight / 100);
    this.selectedIngredient.fats = Math.round(this.selectedIngredient.fats * this.selectedIngredient.weight / 100);
    this.selectedIngredient.calories = Math.round(this.selectedIngredient.calories * this.selectedIngredient.weight / 100); */
    for (const value in this.selectedIngredient) {
      if (this.selectedIngredient.hasOwnProperty(value) && value !== 'name' && value !== 'weight') {
        this.selectedIngredient[value] = Math.round(this.selectedIngredient[value] * this.selectedIngredient.weight / 100);
      }
    }
    this.ingredients.push(this.selectedIngredient);
    this.calculateTotalValues();
  }

  onAddMeal() {
    this.meal.ingredients = this.ingredients;
    this.meal.weightTotal = this.weightTotal;
    this.meal.proteinTotal = this.proteinTotal;
    this.meal.carbsTotal = this.carbsTotal;
    this.meal.fatsTotal = this.fatsTotal;
    this.meal.caloriesTotal = this.caloriesTotal;
    this.addMeal.emit(this.meal);
  }

  ngOnInit() {
  }

}
