import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  public AllPendingUserList =[];
  adminName:any;
  adminId:any;
  public loanId:number;
  constructor (private service:UserService, private router:Router) { }
  
  approveLoan(loanId)
  {
    this.loanId=loanId;
    console.log(loanId);
    this.service.approveLoan(loanId).subscribe(
      data => {
         this.loanId= data;
      }
    );
    window.location.reload();
  }

  rejectLoan(loanId)
  {
    this.loanId=loanId;
    console.log(loanId);
    this.service.rejectLoan(loanId).subscribe(
      data => {
         this.loanId= data;
      }
    );
    window.location.reload();
  }

  ngOnInit() {
    this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }
    this.service.viewPending().subscribe(
      data => {
        this.AllPendingUserList = data
      }
    );
  }
}
