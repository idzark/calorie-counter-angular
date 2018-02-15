import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnChanges {
  @Output() addProduct = new EventEmitter<Product>();
  product: Product = <Product>{};


  constructor() { }

  onAddProduct(form: NgForm) {
    const newProduct = form.value;
    this.addProduct.emit(newProduct);
    form.resetForm();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
