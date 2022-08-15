import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, BrowserModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
