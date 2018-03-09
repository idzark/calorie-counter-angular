import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meal } from '../models/meal.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MealsService {
  path = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  addMeal(mealData: Meal) {
    return this.http.post(this.path + '/meal', mealData, { headers: this.headers });
  }

  getMeals() {
    return this.http.get<Meal[]>(this.path + '/meals');
  }

}
