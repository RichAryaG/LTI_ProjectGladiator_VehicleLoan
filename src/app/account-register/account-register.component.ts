import { Component, OnInit } from '@angular/core';
import {UserService} from '../UserService';
import { Account } from '../account';
import { Router } from "@angular/router";

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})

export class AccountRegisterComponent{
  constructor(private service:UserService, private router:Router) { }

  accountNumber:any;
  bankName:any;
  ifscCode:any;
  accountType:any;
  salary:any;
  existingEmi:any;
  userEmployment:any;
  monthlySavings:any;

  registerAccount()
  {
    var account=new Account();
    account.accountNumber=this.accountNumber;
    account.bankName=this.bankName;
    account.ifscCode=this.ifscCode;
    account.accountType=this.accountType;
    account.salary=this.salary;
    account.existingEmi=this.existingEmi;
    account.userEmployment=this.userEmployment;
    account.monthlySavings=this.monthlySavings;


  //   this.service.registerAccount(account).subscribe(
  //     account=>{
  //       if(account.status=='SUCCESS')
  //       {
  //         console.log(account)
  //         alert("Account details updated !!");
  //         this.router.navigate(['register-vehicle'])
  //       }
  //       else
  //       {
  //         alert("Account Already Exists !!");
  //       }
  //   }
  //   )
  }
}



