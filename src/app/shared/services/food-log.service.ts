import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodLog } from '../models/food-log.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class FoodLogService {
  path = environment.path;
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  addFoodLog(foodLog: FoodLog) {
    return this.http.post(this.path + '/foodlog', foodLog, { headers: this.headers });
  }

  getFoodLog(date: string): Observable<FoodLog[]> {
    return this.http.get<FoodLog[]>(`${this.path}/foodlogs?date=${date}`, { headers: this.headers });
  }

  updateFoodLog(foodLog: FoodLog) {
    return this.http.put(this.path + '/foodlog', foodLog, { headers: this.headers });
  }

}
