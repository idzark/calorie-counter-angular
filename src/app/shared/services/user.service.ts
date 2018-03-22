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
    return this.http.get<UserProfile>(this.path + '/user/profile', { headers: this.headers });
  }

  updateUserProfile(profileData: UserProfile) {
    this.http.put(this.path + '/user/update', { headers: this.headers });
  }

}
