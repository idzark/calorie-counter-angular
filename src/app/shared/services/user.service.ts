import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserProfile } from '../models/user-profile.model';

@Injectable()
export class UserService {
  path = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private  http: HttpClient) { }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.path + '/user', { headers: this.headers });
  }

  updateUserProfile(profileData: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(this.path + '/user', profileData, { headers: this.headers });
  }

}
