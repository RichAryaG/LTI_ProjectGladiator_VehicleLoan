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

  constructor (private service:UserService, private router:Router) { }
  
  ngOnInit() {
    this.service.viewRejected()
    .subscribe(data => this.AllRejectedUserList = data);

}
}
