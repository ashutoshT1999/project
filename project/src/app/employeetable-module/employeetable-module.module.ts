import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeetableModuleComponent } from './employeetable-module.component';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';



@NgModule({
  declarations: [
    EmployeetableModuleComponent
  ],
  imports: [
    CommonModule,MatTableModule, AppRoutingModule , NavbarModuleModule
  ],
  exports: [
    EmployeetableModuleComponent
  ]
})
export class EmployeetableModuleModule { }
