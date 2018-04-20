import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductsService {
  path = environment.path;
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  addProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(this.path + '/product', productData, { headers: this.headers });
  }

  updateProduct(updateData: Product, productId: string): Observable<Product> {
    return this.http.put<Product>(this.path + `/products/${productId}`, updateData, { headers: this.headers });
  }

  deleteProduct(productId: string): Observable<Product> {
    return this.http.delete<Product>(this.path + `/products/${productId}`, { headers: this.headers });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.path + '/products', { headers: this.headers });
  }

}
