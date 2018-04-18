import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProductsComponent, ProductAddComponent, ProductListComponent],
  exports: [ProductAddComponent],
  entryComponents: [ProductAddComponent]
})
export class ProductsModule { }
