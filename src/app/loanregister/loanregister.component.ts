import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-loanregister',
  templateUrl: './loanregister.component.html',
  styleUrls: ['./loanregister.component.css']
})
export class LoanregisterComponent implements OnInit {
  constructor(private router:Router) { }
  userId:string;
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['login']);
    }
  }
}
