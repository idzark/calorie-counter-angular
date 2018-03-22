import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { Meal } from '../../shared/models/meal.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Food } from '../../shared/models/food.model';


@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {
  @Input() products: Product[];
  @Input() meals: Meal[];
  @Output() add = new EventEmitter<Food>();

  food = <Food>{};
  foodCategory: string;
  foodType: string;
  selectedProduct: Product;
  selectedMeal: Meal;
  selectedWeight: number;

  constructor(
    private dialogRef: MatDialogRef<FoodAddComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.foodCategory = data.category;
    this.foodType = data.type;
  }

  calculateFoodMacronutrients(food: Food, totalWeight: number, servingWeight: number) {
    for (const value in food.foodData) {
      if (food.foodData.hasOwnProperty(value) && value !== 'name' && value !== 'weight') {
        food.foodData[value] = Math.round(food.foodData[value] * servingWeight / totalWeight);
      }
    }
  }

  addFood() {
    const totalWeight = this.selectedProduct ? this.selectedProduct.weight : this.selectedMeal.weight;
    this.food.foodData = {
      name: this.selectedProduct ? this.selectedProduct.name : this.selectedMeal.name,
      protein: this.selectedProduct ? this.selectedProduct.protein : this.selectedMeal.protein,
      carbs: this.selectedProduct ? this.selectedProduct.carbs : this.selectedMeal.carbs,
      fats: this.selectedProduct ? this.selectedProduct.fats : this.selectedMeal.fats,
      calories: this.selectedProduct ? this.selectedProduct.calories : this.selectedMeal.calories,
      weight: this.selectedWeight
    };
    this.food.foodCategory = this.foodCategory;
    this.calculateFoodMacronutrients(this.food, totalWeight, this.selectedWeight);
    this.add.emit(this.food);
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
