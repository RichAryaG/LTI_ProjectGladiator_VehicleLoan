import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../UserService';

@Component({
  selector: 'app-view-rejected',
  templateUrl: './view-rejected.component.html',
  styleUrls: ['./view-rejected.component.css']
})
export class ViewRejectedComponent implements OnInit {

  public AllRejectedUserList =[];
  adminName:any;
  adminId:any;
  constructor (private service:UserService, private router:Router) { }
  
  ngOnInit() {
    this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }
    this.service.viewRejected()
    .subscribe(data => this.AllRejectedUserList = data);

}
}
