import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router:Router) { }

  userName:String;
  userId:String;
  userLast:String;
  userAge:String;
  userAddress:String;
  userEmail: String;
  userGender:String;
  userZip:String;

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('userName');
    this.userId=sessionStorage.getItem('userId');
    this.userLast=sessionStorage.getItem('userLast');
    this.userAge=sessionStorage.getItem('userAge');
    this.userAddress=sessionStorage.getItem('userAddress');
    this.userEmail=sessionStorage.getItem('userEmail');
    this.userGender=sessionStorage.getItem('userGender');
    this.userZip=sessionStorage.getItem('userZip');
    
    if(this.userId==null)
    {
      this.router.navigate(['user']);
    }
  }
  update(){}
}
