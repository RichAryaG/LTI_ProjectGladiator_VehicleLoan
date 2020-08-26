import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { UserService } from "../UserService";
import { Loan } from '../Loan';

@Component({
  selector: 'app-loanregister',
  templateUrl: './loanregister.component.html',
  styleUrls: ['./loanregister.component.css']
})
export class LoanregisterComponent implements OnInit {
  constructor(private service:UserService, private router:Router) { }
  userId:string;
  applicationStatus:any;
  interestRate:any;
  loanAmount:any;
  loanEndDate:any;
  loanStartDate:any;
  loanStatus:any;
  processingFee:any;
  tenure:any;
  loantype:any;
  emi=this.loanAmount/this.tenure;

  registerloan()
  {
    var loan=new Loan();
    loan.applicationStatus="Pending";
    loan.interestRate=this.interestRate;
    loan.loanAmount=this.loanAmount;
    loan.loanEndDate=this.loanEndDate;
    loan.loanStartDate=this.loanStartDate;
    loan.loanStatus=this.loanStatus;
    loan.processingFee=this.processingFee;
    loan.tenure=this.tenure;
    loan.emi=(this.loanAmount/this.tenure);
    loan.loantype=this.loantype;

    this.service.registerloan(loan).subscribe(
      loan=>{
        if(loan.status=='SUCCESS')
        {
          console.log(loan)
          alert("New User Registered !!");
          this.router.navigate(['login'])
        }
        else
        {
          alert("User Already Exists !!");
        }
    }
    )
  }

  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['login']);
    }
  }
}
