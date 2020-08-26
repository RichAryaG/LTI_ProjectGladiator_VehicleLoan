import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  public AllPendingUserList =[];

  constructor (private service:UserService, private router:Router) { }
  
  ngOnInit() {
    this.service.viewPending()
    .subscribe(data => this.AllPendingUserList = data);

}
}
