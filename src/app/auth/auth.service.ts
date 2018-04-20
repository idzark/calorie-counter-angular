import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';



@Injectable()
export class AuthService {
  path = environment.path;
  TOKEN_KEY = 'id_token';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(
    private http: HttpClient,
    private router: Router) { }

  loggedIn = new BehaviorSubject<boolean>(false);

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  tokenExpired() {
    return !tokenNotExpired(this.TOKEN_KEY);
  }

  get isLoggedIn() {
    if (tokenNotExpired(this.TOKEN_KEY)) {
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
  }

  registerUser(registerData) {
    return this.http.post(this.path + '/register', registerData, { headers: this.headers })
      .do(() => this.router.navigateByUrl('/login'));
  }

  loginUser(loginData) {
    return this.http.post<any>(this.path + '/login', loginData)
      .do((res) => {
        this.saveToken(res);
        this.router.navigateByUrl('/');
      })
      .shareReplay();
  }

  private saveToken(authResponse) {
    localStorage.setItem('id_token', authResponse.token);
  }

  logout() {
    localStorage.removeItem('id_token');
    this.loggedIn.next(false);
  }

}
