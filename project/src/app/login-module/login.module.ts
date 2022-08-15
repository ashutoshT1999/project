import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, AppRoutingModule , MatDialogModule
  ]
  , exports: [
    LoginComponent
  ]
})
export class LoginModule { }
