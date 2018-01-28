import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/modules/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent, HomeComponent, DashboardComponent]
})
export class CoreModule { }
