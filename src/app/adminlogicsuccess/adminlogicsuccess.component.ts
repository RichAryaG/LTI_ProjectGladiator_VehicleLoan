import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-adminlogicsuccess',
  templateUrl: './adminlogicsuccess.component.html',
  styleUrls: ['./adminlogicsuccess.component.css']
})
export class AdminlogicsuccessComponent implements OnInit {
  adminName:any;
  adminId:any;
  constructor(private router:Router) { }

  ngOnInit(): void { 
    this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }
  }
}
