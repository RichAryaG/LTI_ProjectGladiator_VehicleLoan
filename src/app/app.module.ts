import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
// import {DataTablesModule} from 'angular-datatables';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogicsuccessComponent } from './logicsuccess/logicsuccess.component';
import { AdminlogicsuccessComponent } from './adminlogicsuccess/adminlogicsuccess.component';
import { CheckeligiblityComponent } from './checkeligiblity/checkeligiblity.component';
import { CheckeligiblityuserComponent } from './checkeligiblityuser/checkeligiblityuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { LoanregisterComponent } from './loanregister/loanregister.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginAdminComponent,
    LoginUserComponent,
    LogicsuccessComponent,
    LoanregisterComponent,
    AdminlogicsuccessComponent,
    CheckeligiblityComponent,
    CheckeligiblityuserComponent,
    RegistrationComponent,
    AccountRegisterComponent,
    VehicleRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
