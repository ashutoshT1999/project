import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewemployeeComponent } from './viewemployee.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';
import { AppRoutingModule } from '../app-routing.module';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    ViewemployeeComponent
  ],
  imports: [
    CommonModule, MatCardModule, NavbarModuleModule , AppRoutingModule,MatDividerModule
  ],
  exports: [
    ViewemployeeComponent
  ]
})
export class ViewemployeeModuleModule { }
