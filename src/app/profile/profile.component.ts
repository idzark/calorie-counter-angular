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
