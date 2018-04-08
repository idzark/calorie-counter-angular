import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs/Observable';
import { UserProfile } from '../shared/models/user-profile.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile;
  errorsList = [];
  validationErrors: boolean;

  constructor(
    private userService: UserService,
    public snackBar: MatSnackBar) { }

  updateProfile(profileData: UserProfile) {
    this.userService.updateUserProfile(profileData)
      .subscribe(
        (res) => {
          this.userProfile = res;
          this.snackBar.open('Profile updated', 'Close', {
            duration: 2000,
          });
          this.validationErrors = false;
        },
        (err) => {
          this.validationErrors = true;
          this.errorsList = err.error;
        }
      );
  }

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(
        (res) => {
          this.userProfile = res;
        }
      );
  }

}
