import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-logicsuccess',
  templateUrl: './logicsuccess.component.html',
  styleUrls: ['./logicsuccess.component.css']
})

export class LogicsuccessComponent implements OnInit {
  constructor(private router:Router) { }
  
  userName:string;
  userId:string;
  
  public AppliedLoanList =[];
  ngOnInit(): void {
    this.userName=sessionStorage.getItem('userName');
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['user']);
    }
  }
  
  redirect()
  {
    this.router.navigate(['logout']);
  }
  viewLoanStatus()
  {
    this.router.navigate(['check-loan-status']);
  }
}
