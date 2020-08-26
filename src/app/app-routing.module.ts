import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogicsuccessComponent } from './logicsuccess/logicsuccess.component';
import { AdminlogicsuccessComponent } from './adminlogicsuccess/adminlogicsuccess.component';
import { CheckeligiblityComponent } from './checkeligiblity/checkeligiblity.component';
import { CheckeligiblityuserComponent } from './checkeligiblityuser/checkeligiblityuser.component'
import { LoanregisterComponent } from './loanregister/loanregister.component';
import { RegistrationComponent } from './registration/registration.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { AccountRegisterComponent } from './account-register/account-register.component'
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { LogoutComponent } from './logout/logout.component';
import { LoanappsuccessComponent } from './loanappsuccess/loanappsuccess.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'loginsuccess', component: LogicsuccessComponent},
  {path: 'adminloginsuccess', component: AdminlogicsuccessComponent},
  {path: 'checkeligiblity', component: CheckeligiblityComponent},
  {path: 'checkeligiblityuser', component: CheckeligiblityuserComponent},
  {path: 'loanregister', component: LoanregisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'admin', component: LoginAdminComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'user', component: LoginUserComponent},
  {path: 'loanappsuccess', component: LoanappsuccessComponent},
  {path: 'vehicleregister', component: VehicleRegisterComponent},
  {path: 'accountregister', component: AccountRegisterComponent},
  {path: 'view-all-user', component: ViewAllUsersComponent},
  {path: 'view-application', component: ViewApplicationComponent},
  {path: 'view-clients', component: ViewClientsComponent},
  {path: 'view-rejected', component: ViewRejectedComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }