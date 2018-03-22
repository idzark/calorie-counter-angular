import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { FormsModule } from '@angular/forms';
import { FoodComponent } from './food.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodLogComponent } from './food-log/food-log.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [FoodComponent, DateDisplayComponent, FoodAddComponent, FoodLogComponent],
  entryComponents: [FoodAddComponent]
})
export class FoodModule { }
