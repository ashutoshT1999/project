import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModuleComponent } from './product-module.component';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProductModuleComponent
  ],
  imports: [
    CommonModule,NavbarModuleModule,MatInputModule,MatSelectModule,ReactiveFormsModule,MatButtonModule
  ],
  exports:[
    ProductModuleComponent
  ]
})
export class ProductModuleModule { }
