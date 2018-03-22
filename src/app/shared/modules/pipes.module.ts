import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { SumPipe } from '../pipes/sum.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe, SumPipe],
  exports: [FilterPipe, SumPipe]
})
export class PipesModule { }
