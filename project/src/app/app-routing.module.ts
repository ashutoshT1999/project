import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login-module/login.component';
import { NavbarComponent } from './navbar-module/navbar.component';
import { ViewemployeeComponent } from './viewemployee-module/viewemployee.component';
import { EditemployeeComponent } from './editemployee-module/editemployee.component';
import { EmployeetableModuleComponent } from './employeetable-module/employeetable-module.component';
import { ProductTableModuleComponent } from './product-table-module/product-table-module.component';
import { ProductModuleComponent } from './product-module/product-module.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DeleteEmployeeComponentComponent } from './delete-employee-module/delete-employee-component.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'employee', component: EmployeetableModuleComponent },
  {path:'deleteemp/:id',component:DeleteEmployeeComponentComponent},
  { path: 'navbar', component: NavbarComponent },
  { path: 'prodform', component: ProductModuleComponent },
  { path: 'prodtable', component: ProductTableModuleComponent },
  { path: 'view/:id', component: ViewemployeeComponent },
  { path: 'edit/:id', component: EditemployeeComponent },
  { path: 'viewprod/:id', component: ProductViewComponent },
  { path: 'editprod/:id', component: ProductEditComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
