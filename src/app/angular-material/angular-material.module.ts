import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { PrimengModule } from '../primeng/primeng.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatNavList } from "@angular/material/list";
import { MatMenu } from "@angular/material/menu";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      //Angular Material
      MatButtonModule,
      MatTableModule,
      PrimengModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatNavList,
  
  
      MatAutocompleteModule,
      MatCardModule,
      MatChipsModule,
      MatInputModule,
      MatMenu
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatNavList,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenu
  ]
})
export class AngularMaterialModule { }
