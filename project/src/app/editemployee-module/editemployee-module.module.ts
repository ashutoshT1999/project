import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditemployeeComponent } from './editemployee.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    EditemployeeComponent
  ],
  imports: [
    CommonModule, MatCardModule,MatInputModule,NavbarModuleModule,FormsModule, AppRoutingModule ,MatDividerModule
  ],
  exports: [
    EditemployeeComponent
  ]
})
export class EditemployeeModuleModule { }
