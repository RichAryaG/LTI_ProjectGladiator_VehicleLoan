import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-loan-status',
  templateUrl: './check-loan-status.component.html',
  styleUrls: ['./check-loan-status.component.css']
})
export class CheckLoanStatusComponent implements OnInit {

  public AppliedLoanList =[];
  userName:any;
  userId:any;
  constructor (private service:UserService, private router:Router) { }
  
  ngOnInit() {
    this.userName=sessionStorage.getItem('userName');
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['login']);
    }
    this.service.viewAppliedLoans(this.userId)
    .subscribe(data => this.AppliedLoanList = data);

}

}
