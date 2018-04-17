import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product.model';
import { Meal } from '../shared/models/meal.model';
import { MealsService } from '../shared/services/meals.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MealAddComponent } from './meal-add/meal-add.component';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  searchText: string;
  products: Product[];
  meals: Meal[];
  newMeal: Meal;
  categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  errorsList = [];
  validationErrors: boolean;

  constructor(
    private productsService: ProductsService,
    private mealsService: MealsService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MealAddComponent, {
      data: {
        errorsList: this.errorsList,
        validationErrors: this.validationErrors
      }
    });
    dialogRef.componentInstance.products = this.products;
    dialogRef.componentInstance.meals = this.meals;
    dialogRef.componentInstance.categories = this.categories;
    dialogRef.componentInstance.addMeal.subscribe( event => {
      this.addNewMeal(event);
    });
  }

  addNewMeal(event) {
    this.newMeal = event;
    this.mealsService.addMeal(this.newMeal)
      .subscribe(
        (res) => {
          this.snackBar.open('New meal added', 'Close', {
            duration: 3000,
          });
          this.meals = [...this.meals, res];
          this.validationErrors = false;
        },
        (error) => {
          this.errorsList = error.error;
          this.validationErrors = true;
        }
      );
  }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(
        (res) => {
          this.products = res;
        }
      );

      this.mealsService.getMeals()
        .subscribe(
          (res) => {
            this.meals = res;
          }
        );
  }

}
