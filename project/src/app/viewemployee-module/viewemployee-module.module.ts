import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewemployeeComponent } from './viewemployee.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';



@NgModule({
  declarations: [
    ViewemployeeComponent
  ],
  imports: [
    CommonModule, MatCardModule, NavbarModuleModule
  ],
  exports: [
    ViewemployeeComponent
  ]
})
export class ViewemployeeModuleModule { }
