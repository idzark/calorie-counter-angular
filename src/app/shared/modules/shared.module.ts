import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ErrorListComponent } from '../error-list/error-list.component';
import { CommonModule } from '@angular/common/';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ErrorListComponent
  ],
  declarations: [ErrorListComponent]
})
export class SharedModule { }
