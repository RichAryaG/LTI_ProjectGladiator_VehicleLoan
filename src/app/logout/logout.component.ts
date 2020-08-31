import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router:Router) { }
  userId: String;
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['home']);
    }
    else{
      sessionStorage.clear();
      setTimeout(function(){
        window.location.href = '/user';
     }, 1000);
    }
   
  }

}
