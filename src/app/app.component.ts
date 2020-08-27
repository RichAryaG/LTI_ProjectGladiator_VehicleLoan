import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New-Wheels';
  loginbtn=true;
  logoutbtn=false;

  ngOnInit(): void {
    
    if(sessionStorage.length===0)
    {
      this.loginbtn = true;
    }
    else{
      this.loginbtn = false;
      this.logoutbtn = true;

    }
  }
  constructor(private router: Router){}
  
  login()
  {
    this.router.navigate(['/login']);
  }

  logout()
  {
    sessionStorage.clear()
    this.router.navigate(['/']);
  }
}
