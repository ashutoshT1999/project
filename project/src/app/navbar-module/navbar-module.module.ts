import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule, AppRoutingModule,MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModuleModule { }
