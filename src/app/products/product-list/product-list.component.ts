import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ProductAddComponent } from '../product-add/product-add.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() products: Product[];
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<string>();

  displayedColumns = ['name', 'protein', 'carbs', 'fats', 'calories', 'actions'];
  dataSource = new MatTableDataSource(this.products);

  constructor(
    public dialog: MatDialog
  ) { }


  openEditDialog(mode: string, editData: Product, id: string) {
    const editDialogConfig = new MatDialogConfig;

    editDialogConfig.width = '300px';
    editDialogConfig.data = {
      mode: mode,
      editData: editData,
      id: id
    };
    const dialogRef = this.dialog.open(ProductAddComponent, editDialogConfig);
    dialogRef.componentInstance.products = this.products;
    dialogRef.componentInstance.update.subscribe(updateData => {
      this.updateProduct(updateData);
    });
  }

  updateProduct(updateData) {
    this.update.emit(updateData);
  }

  deleteProduct(productId) {
    this.delete.emit(productId);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.products);
  }

}
