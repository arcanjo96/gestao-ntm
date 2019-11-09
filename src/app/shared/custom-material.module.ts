import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatOptionModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
  MatBadgeModule, MatToolbarModule, MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule, MatBadgeModule,
    MatToolbarModule, MatCardModule
  ],
  exports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule, MatBadgeModule,
    MatToolbarModule, MatCardModule
  ],
})
export class CustomMaterialModule { }
