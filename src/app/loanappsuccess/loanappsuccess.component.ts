import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-loanappsuccess',
  templateUrl: './loanappsuccess.component.html',
  styleUrls: ['./loanappsuccess.component.css']
})
export class LoanappsuccessComponent {
  constructor(private router:Router) { }
  dashboard(){
    this.router.navigate(['loginsuccess']);
  }
  redirect()
  {
    this.router.navigate(['logout']);
  }
}