import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.tokenExpired()) {
      this.authService.logout();
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
