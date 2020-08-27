import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  public AllApprovedUserList = [];

  constructor (private service:UserService, private router:Router) { }
  
  ngOnInit() {
    this.service.viewApproved()
    .subscribe(data => this.AllApprovedUserList = data);

}
}
