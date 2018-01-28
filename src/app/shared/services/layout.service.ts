import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class LayoutService {
  private sidenav:  MatSidenav;

  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

}
