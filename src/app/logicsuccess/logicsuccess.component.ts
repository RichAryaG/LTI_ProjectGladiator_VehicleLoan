import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logicsuccess',
  templateUrl: './logicsuccess.component.html',
  styleUrls: ['./logicsuccess.component.css']
})

export class LogicsuccessComponent implements OnInit {
  constructor(){}
  userName:string;
  userId:string;
  ngOnInit(): void { 
    this.userName=sessionStorage.getItem('userName');
    this.userId=sessionStorage.getItem('userId');
  }
}
