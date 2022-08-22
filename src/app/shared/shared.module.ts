import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,ReactiveFormsModule,
    HttpClientModule, MatToolbarModule, MatIconModule, MatCardModule,MatGridListModule,MatButtonModule,MatInputModule
  ],
  exports:[
    CommonModule,ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatIconModule, MatCardModule,MatGridListModule,MatButtonModule,MatInputModule
  ]
})
export class SharedModule { }
