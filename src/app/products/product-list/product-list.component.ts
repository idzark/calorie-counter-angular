import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() products: Product[];

  displayedColumns = ['name', 'protein', 'carbs', 'fats', 'calories'];
  dataSource = new MatTableDataSource(this.products);

  constructor() { }

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
