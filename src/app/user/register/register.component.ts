import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  passwordConfirmation: string;

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar) { }

  onRegister() {
    const registerData = {
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    };
    this.authService.registerUser(registerData)
      .subscribe(
        (res) => {
          this.snackBar.open('Account created', 'Close', {
            duration: 3000,
          });
        }
      );
  }

  ngOnInit() {
  }

}
