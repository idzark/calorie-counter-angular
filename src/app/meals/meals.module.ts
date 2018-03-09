import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealsComponent } from './meals.component';
import { MealAddComponent } from './meal-add/meal-add.component';
import { MealComponent } from './meal/meal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [MealsComponent, MealAddComponent, MealComponent],
  exports: [MealAddComponent],
  entryComponents: [MealAddComponent]
})
export class MealsModule { }
