import { NgModule } from '@angular/core';


import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
