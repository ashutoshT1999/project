import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModuleModule } from './navbar-module/navbar-module.module';
import { LoginModule } from './login-module/login.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    DialogSavedComponent,
    DialogDeleteConfirmComponent,
    DialogSaveAskComponent,
    DialogDeleteAskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, NavbarModuleModule, LoginModule, MatInputModule, MatFormFieldModule, FormsModule, SignupModule, MatDialogModule, EmployeetableModuleModule ,ViewemployeeModuleModule,EditemployeeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
