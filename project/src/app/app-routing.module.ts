import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login-module/login.component';
import { NavbarComponent } from './navbar-module/navbar.component';
import { ViewemployeeComponent } from './viewemployee-module/viewemployee.component';
import { EditemployeeComponent } from './editemployee-module/editemployee.component';
import { EmployeetableModuleComponent } from './employeetable-module/employeetable-module.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'employee', component: EmployeetableModuleComponent },
  // { path: 'navbar', component: NavbarComponent },
  { path: 'view/:id', component: ViewemployeeComponent },
  { path: 'edit/:id', component: EditemployeeComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
