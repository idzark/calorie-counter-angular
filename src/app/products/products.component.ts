import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  products: Product[];
  product: Product;

  constructor(
    private productsSerivce: ProductsService,
    public snackBar: MatSnackBar) { }

  addNewProduct(event) {
    this.product = event;
    this.productsSerivce.addProduct(this.product)
      .subscribe(
      (res) => {
        this.snackBar.open('New product added', 'Close', {
          duration: 3000,
        });
        this.products = [...this.products, this.product];
      }
      );
  }

  getProducts() {
    this.productsSerivce.getProducts()
      .subscribe(
      (res) => {
        this.products = res;
      }
      );
  }

  ngOnInit() {
    this.getProducts();
  }

  ngOnChanges() {
  }

}
