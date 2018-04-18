import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ProductAddComponent } from './product-add/product-add.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  products: Product[];
  product: Product;
  errorsList = [];
  validationErrors: boolean;

  constructor(
    private productsSerivce: ProductsService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ProductAddComponent, {
      width: '300px',
      data: {
        mode: 'add'
      }
    });
    dialogRef.componentInstance.products = this.products;
    dialogRef.componentInstance.add.subscribe(product => {
      this.addNewProduct(product);
    });
  }

  addNewProduct(product: Product) {
    this.product = product;
    this.productsSerivce.addProduct(this.product)
      .subscribe(
      (res) => {
        this.snackBar.open('New product added', 'Close', {
          duration: 3000,
        });
        this.products = [...this.products, res];
        this.validationErrors = false;
      },
      (error) => {
        this.errorsList = error.error;
        this.validationErrors = true;
      }
      );
  }

  updateProduct(updateData) {
    this.product = updateData.product;
    this.productsSerivce.updateProduct(this.product, updateData.id)
      .subscribe(
        (res) => {
          this.snackBar.open('Product updated', 'Close', {
            duration: 3000,
          });
          this.getProducts();
          this.validationErrors = false;
        },
      (error) => {
        this.errorsList = error.error;
        this.validationErrors = true;
      }
      );
  }

  deleteProductFromTable(product: Product) {
    const productIndex = this.products.findIndex(item => {
      return item.name === product.name;
    });
    this.products.splice(productIndex, 1);
  }

  deleteProduct(productId: string) {
    this.productsSerivce.deleteProduct(productId)
      .subscribe(
        (res) => {
          this.snackBar.open('Product deleted', 'Close', {
            duration: 3000,
          });
          this.deleteProductFromTable(res);
          this.products = [...this.products];
          this.validationErrors = false;
        },
        (error) => {
          this.snackBar.open('Server error', 'Close', {
            duration: 3000,
          });
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
