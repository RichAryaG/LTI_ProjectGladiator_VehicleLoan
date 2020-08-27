import { Component, OnInit } from '@angular/core';
import {UserService} from '../UserService';
import { Login } from "../loginClass";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  email:any
  password:any
  message:any

  constructor(private service: UserService, private router:Router) { }
  
  login()
  {
    var login=new Login()
    login.email=this.email
    login.password=this.password
    this.service.login(login).subscribe(
      user=>{
        if(user.status=='SUCCESS')
        {
          let userName= user.userNameFirst;
          let userId= user.userId;
          let userNameLast=user.userNameLast; 
          let userAge=user.userAge;
          let userAddress=user.userAddress;
          let userEmail=user.userEmail;

          sessionStorage.setItem('userName', userName)
          sessionStorage.setItem('userId', user.userId)
          sessionStorage.setItem('userLast', user.userNameLast)
          sessionStorage.setItem('userAge', user.userAge)
          sessionStorage.setItem('userAddress', user.userAddress)
          sessionStorage.setItem('userEmail', user.userEmail)
          this.router.navigate(['loginsuccess'])
          
        }
        else
        {
          alert(user.status)
          this.message=user.message
          this.router.navigate(['user'])
        }
      }
    )
  }
}