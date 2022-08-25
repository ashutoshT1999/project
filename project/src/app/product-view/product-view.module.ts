import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarModuleModule } from '../navbar-module/navbar-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule, MatCardModule,NavbarModuleModule, AppRoutingModule, MatDividerModule
  ],
  exports:[ProductViewComponent]
})
export class ProductViewModule { }
