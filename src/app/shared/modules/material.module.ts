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
  MatSnackBarModule,
  MatSelectModule,
  MatDialogModule,
  MatExpansionModule,
  MatChipsModule
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
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule
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
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
