import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = true;

  constructor(private layoutService: LayoutService) { }

  onSidenavToggle() {
    this.layoutService.toggleSidenav();
  }

  ngOnInit() {
  }

}
