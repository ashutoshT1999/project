import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableModuleComponent } from './product-table-module.component';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductTableModuleComponent
  ],
  imports: [
    CommonModule,NavbarModuleModule,MatTableModule,MatButtonModule,AppRoutingModule
  ],
  exports:[
    ProductTableModuleComponent
  ]
})
export class ProductTableModuleModule { }
