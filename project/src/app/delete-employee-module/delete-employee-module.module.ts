import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteEmployeeComponentComponent } from './delete-employee-component.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatDividerModule } from '@angular/material/divider';





@NgModule({
  declarations: [
    DeleteEmployeeComponentComponent
  ],
  imports: [
    CommonModule,MatCardModule,NavbarModuleModule,MatInputModule,FormsModule,AppRoutingModule,MatDividerModule
  ],
  exports: [
    DeleteEmployeeComponentComponent

  ]
})
export class DeleteEmployeeModuleModule { }
