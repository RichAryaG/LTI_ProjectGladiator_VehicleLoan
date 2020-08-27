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
  userid:any;
  constructor (private service:UserService, private router:Router) { }
  
    ngOnInit(): void { 
      this.userName=sessionStorage.getItem('userName');
      this.userid=sessionStorage.getItem('userId');
      console.log(this.userid);
      if(this.userid==null)
      {
        this.router.navigate(['user']);
      }
    this.service.viewloanstatus(this.userid)
    .subscribe(data => this.AppliedLoanList = data);

}

}
