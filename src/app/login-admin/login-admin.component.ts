import { Component } from '@angular/core';
import {UserService} from '../UserService';
import { Login } from "../loginClass";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  email:any
  password:any
  message:any

  constructor(private service: UserService, private router:Router) { }

  loginadmin()
  {
    var adminlogin=new Login()
    adminlogin.email=this.email
    adminlogin.password=this.password
    this.service.loginadmin(adminlogin).subscribe(
      user=>{
        if(user.status=='SUCCESS')
        {
          let adminName= user.adminNameFirst;
          let adminId= user.adminId;

          sessionStorage.setItem('adminName', adminName)
          sessionStorage.setItem('adminId', adminId)
          this.router.navigate(['adminloginsuccess'])
        }
        else
        {
          alert(user.status)
          this.message=user.message
          this.router.navigate(['admin'])
        }
      }
    )
  }
}