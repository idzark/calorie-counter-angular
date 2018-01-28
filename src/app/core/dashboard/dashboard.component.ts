import { Component, OnInit, ViewChild, HostListener} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavMode = 'side';
  sidenavBreakpoint = 500;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < this.sidenavBreakpoint) {
      this.sidenav.close();
      this.sidenavMode = 'over';
    }
    if (event.target.innerWidth > this.sidenavBreakpoint) {
      this.sidenav.open();
      this.sidenavMode = 'side';
    }
  }

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.setSidenav(this.sidenav);
  }

}
