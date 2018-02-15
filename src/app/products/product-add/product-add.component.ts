import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnChanges {
  @Input() errorsList;
  @Input() validationErrors: boolean;
  @Output() addProduct = new EventEmitter<Product>();
  product: Product = <Product>{};


  constructor() { }

  onAddProduct(form: NgForm) {
    const newProduct = form.value;
    if (form.valid) {
      this.addProduct.emit(newProduct);
      form.resetForm();
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
