import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ErrorListComponent } from '../error-list/error-list.component';
import { CommonModule } from '@angular/common/';
import { PipesModule } from './pipes.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule
  ],
  exports: [
    MaterialModule,
    PipesModule,
    ErrorListComponent
  ],
  declarations: [ErrorListComponent]
})
export class SharedModule { }
