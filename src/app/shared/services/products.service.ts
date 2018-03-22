import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {
  path = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  addProduct(productData: Product) {
    return this.http.post(this.path + '/product', productData, { headers: this.headers });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path + '/products', { headers: this.headers });
  }

}
