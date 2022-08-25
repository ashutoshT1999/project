import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModuleModule } from './navbar-module/navbar-module.module';
import { LoginModule } from './login-module/login.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupModule } from './signup/signup.module';
import { MatDialogModule } from '@angular/material/dialog';

import { EmployeetableModuleModule } from './employeetable-module/employeetable-module.module';
import { ViewemployeeModuleModule } from './viewemployee-module/viewemployee-module.module';
import { EditemployeeComponent } from './editemployee-module/editemployee.component';
import { EditemployeeModuleModule } from './editemployee-module/editemployee-module.module';
import { DialogSavedComponent } from './dialog-saved/dialog-saved.component';
import { DialogDeleteConfirmComponent } from './dialog-delete-confirm/dialog-delete-confirm.component';
import { DialogSaveAskComponent } from './dialog-save-ask/dialog-save-ask.component';
import { DialogDeleteAskComponent } from './dialog-delete-ask/dialog-delete-ask.component';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { employeedatabyapi } from './employee-service/employee.api.component';
import { ProductModuleModule } from './product-module/product-module.module';
import { ProductTableModuleModule } from './product-table-module/product-table-module.module';
import { productdataserviceApi } from './product-service/product-data-api';
import { ProductViewModule } from './product-view/product-view.module';
import { ProductEditModule } from './product-edit/product-edit.module';




@NgModule({
  declarations: [
    AppComponent,
    DialogSavedComponent,
    DialogDeleteConfirmComponent,
    DialogSaveAskComponent,
    DialogDeleteAskComponent

  ],
  imports: [
    BrowserModule,ProductViewModule,ProductEditModule,ReactiveFormsModule, ProductModuleModule,
    AppRoutingModule, ProductTableModuleModule,
    BrowserAnimationsModule, NavbarModuleModule, LoginModule, MatInputModule, MatFormFieldModule, FormsModule, SignupModule, MatDialogModule, EmployeetableModuleModule, ViewemployeeModuleModule, EditemployeeModuleModule, HttpClientInMemoryWebApiModule.forRoot(employeedatabyapi),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
