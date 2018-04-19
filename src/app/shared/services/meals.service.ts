import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meal } from '../models/meal.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MealsService {
  path = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  addMeal(mealData: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.path + '/meal', mealData, { headers: this.headers });
  }

  updateMeal(updateData: Meal, mealId: string) {
    return this.http.put(`${this.path}/meals/${mealId}`, updateData, { headers: this.headers });
  }

  deleteMeal(mealId: string): Observable<Meal> {
    return this.http.delete<Meal>(`${this.path}/meals/${mealId}`, { headers: this.headers });
  }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.path + '/meals', { headers: this.headers });
  }

}
