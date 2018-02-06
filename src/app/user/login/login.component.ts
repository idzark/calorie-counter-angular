import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  errorsList = [];
  validationErrors: boolean;

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar) { }

  onLogin() {
    const loginData = { username: this.username, password: this.password };
    this.authService.loginUser(loginData)
      .subscribe(
        (res) => {
          this.snackBar.open('Logged in', 'Close', {
            duration: 3000,
          });
        },
        (error) => {
          this.errorsList = error.error.errors;
          this.validationErrors = true;
        }
      );
  }

  ngOnInit() {
  }

}
