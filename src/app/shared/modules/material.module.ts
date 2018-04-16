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
  MatChipsModule,
  MatTabsModule,
  MatDividerModule
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
    MatExpansionModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule
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
    MatExpansionModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
