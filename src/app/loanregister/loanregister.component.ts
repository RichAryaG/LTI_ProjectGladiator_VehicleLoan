import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { UserService } from "../UserService";
import { Loan } from '../Loan';
import {formatDate} from '@angular/common';
import { animation } from '@angular/animations';
@Component({
  selector: 'app-loanregister',
  templateUrl: './loanregister.component.html',
  styleUrls: ['./loanregister.component.css']
})
export class LoanregisterComponent implements OnInit {
  constructor(private service:UserService, private router:Router) { }
  user_id:string;
  applicationStatus:any;
  interestRate:any;
  processingFee:any;
  loanAmount:any;
  loanEndDate:any;
  loanStartDate:any;
  loanStatus:any;
  tenure:any;
  loantype:any;
  selectedEMI:string;
  
  emi=this.loanAmount/this.tenure;

  selectChangeHandler() {
    console.log(this.user_id);
      if(this.tenure==6)
      {
        this.selectedEMI="7%";
      }
      else if(this.tenure==12)
      {
        this.selectedEMI="7.5%";
      }
      else if(this.tenure==24)
      {
        this.selectedEMI="8%";
      }
      else if(this.tenure==36)
      {
        this.selectedEMI="8.5%";
      }
      else if(this.tenure==48)
      {
        this.selectedEMI="9%";
      }
      else if(this.tenure==60)
      {
        this.selectedEMI="9.5%";
      }
      else if(this.tenure==72)
      {
        this.selectedEMI="10.5%";
      }
      else if(this.tenure==84)
      {
        this.selectedEMI="11%";
      }
  } 

  registerloan()
  {
    if(this.tenure==6)
    {
      this.interestRate=7;
    }
    else if(this.tenure==12)
    {
      this.interestRate=7.5;
    }
    else if(this.tenure==24)
    {
      this.interestRate=8;
    }
    else if(this.tenure==36)
    {
      this.interestRate=8.5;
    }
    else if(this.tenure==48)
    {
      this.interestRate=9;
    }
    else if(this.tenure==60)
    {
      this.interestRate=9.5;
    }
    else if(this.tenure==72)
    {
      this.interestRate=10.5;
    }
    else if(this.tenure==84)
    {
      this.interestRate=11;
    }

    if(this.loantype==2){
      this.processingFee =2000;
    }
    else if (this.loantype == 3) {
      this.processingFee = 3000;
    }
    else if (this.loantype == 4) {
      this.processingFee = 4000;
    }

    var loan=new Loan();
    loan.applicationStatus="Pending";
    loan.interestRate=this.interestRate;
    loan.loanAmount=this.loanAmount;
    loan.loantype=this.loantype;
    loan.processingFee=this.processingFee;
    loan.loanEndDate=new Date(new Date().setMonth(new Date().getMonth() + Number(this.tenure)));
    loan.loanStartDate=formatDate(new Date(), 'yyyy-MM-dd', 'en');
    loan.loanStatus="New";
    loan.tenure=this.tenure;
    loan.user_id=this.user_id;
    // loan.emi=this.loanAmount*(this.interestRate/12)*(((1+this.interestRate/120)^this.tenure)/(((1+this.interestRate/120)^this.tenure)-1));
    loan.emi = ((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    this.service.registerloan(loan).subscribe(
      loan=>{
        if(loan.status=='SUCCESS')
        {
          console.log(loan)
          alert("New Loan Registered!!");
          this.router.navigate(['loginsuccess'])
        }
        else
        {
          alert("Loan Already Exists!!");
        }
    }
    )
  }

  ngOnInit(): void {
    this.user_id=sessionStorage.getItem('userId');
    if(this.user_id==null)
    {
      this.router.navigate(['user']);
    }
  }
}
