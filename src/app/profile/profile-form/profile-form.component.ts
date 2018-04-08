import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '../../shared/models/user-profile.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() userProfile: UserProfile;
  @Input() errorsList;
  @Input() validationErrors: boolean;
  @Output() update = new EventEmitter<UserProfile>();

  constructor() { }

  /* onMacronutrientChange() {
    this.proteinPercentage.nativeElement.value = (this.userProfile.protein * 4 / this.userProfile.calories) * 100;
    this.carbsPercentage.nativeElement.value = (this.userProfile.carbs * 4 / this.userProfile.calories) * 100;
    this.fatsPercentage.nativeElement.value = (this.userProfile.fats * 4 / this.userProfile.calories) * 100;
  } */

  ngOnInit() {

  }

  onProfileUpdate() {
    console.log('profile data', this.userProfile);
    this.update.emit(this.userProfile);
  }

}
