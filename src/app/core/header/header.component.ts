import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private layoutService: LayoutService,
    private authService: AuthService) { }

  onSidenavToggle() {
    this.layoutService.toggleSidenav();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

}
