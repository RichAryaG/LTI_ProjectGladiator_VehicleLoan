import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkeligiblity',
  templateUrl: './checkeligiblity.component.html',
  styleUrls: ['./checkeligiblity.component.css']
})
export class CheckeligiblityComponent {
  elig: boolean=false;
  route="/checkeligiblity";
  stat:string;
  checkeligiblity(){
    if(this.elig==false)
    {
      this.stat="USER IS ELIGIBLE!";
      this.elig=true;
      this.route="/applyloan";
    }
  }
}
