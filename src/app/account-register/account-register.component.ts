import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { Accounts } from "../Accounts";
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})

export class AccountRegisterComponent{
  constructor (private service:UserService, private router:Router) { }
  accNumber:any;
  accBankName:any;
  accIfsc:any;
  accType:any;
  salary:any;
  exisitingEmi:any;
  userEmployment:any;
  monthlySavings:any;

  registeraccount()
  {
    var accounts=new Accounts();
    accounts.accNumber=this.accNumber;
    accounts.accBankName=this.accBankName;
    accounts.accIfsc=this.accIfsc;
    accounts.accType=this.accType;
    accounts.salary=this.salary;
    accounts.exisitingEmi=this.exisitingEmi;
    accounts.userEmploymentType=this.userEmployment;
    accounts.monthlySavings=this.monthlySavings;


    this.service.registerAccount(accounts).subscribe(
      account=>{
        if(account.status=='SUCCESS')
        {
          console.log(account)
          alert("Account details updated !!");
          this.router.navigate(['vehicleregister'])
        }
        else
        {
          alert("Account Already Exists !!");
          this.router.navigate(['vehicleregister']);
        }
    }
    )
  }
}



