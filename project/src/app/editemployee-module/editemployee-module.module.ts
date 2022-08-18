import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditemployeeComponent } from './editemployee.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';



@NgModule({
  declarations: [
    EditemployeeComponent
  ],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [
    EditemployeeComponent
  ]
})
export class EditemployeeModuleModule { }
