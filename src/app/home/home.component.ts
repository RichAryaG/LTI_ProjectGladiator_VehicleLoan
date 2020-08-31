import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'New-Wheels';

  constructor(private titleService: Title ) { }

  ngOnInit(): void {
    this.titleService.setTitle("New-Wheels");
    sessionStorage.clear();
  }

}
