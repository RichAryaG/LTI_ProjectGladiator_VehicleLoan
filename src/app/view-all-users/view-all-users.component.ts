import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit{

  public AllUserList =[];

  constructor (private service:UserService, private router:Router) { }
  
  ngOnInit() {
    this.service.viewAll()
    .subscribe(data => this.AllUserList = data);
  }


}
