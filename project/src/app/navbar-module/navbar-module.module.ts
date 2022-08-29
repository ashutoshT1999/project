import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule, AppRoutingModule,MatButtonModule,NgbModule,MatDividerModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModuleModule { }
