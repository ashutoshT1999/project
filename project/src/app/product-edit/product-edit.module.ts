import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './product-edit.component';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,NavbarModuleModule,MatInputModule,MatSelectModule,ReactiveFormsModule,MatButtonModule,AppRoutingModule
  ]
})
export class ProductEditModule { }
