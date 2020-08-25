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
  onroadprice:number;
  monthlysavings:number;
  existingemi:number;
  loantenure:number;
  newemi:number = this.onroadprice/this.loantenure;
  spentnew = this.newemi-this.existingemi;

  checkeligiblity(){
    if (this.spentnew<=this.monthlysavings)
    {
      if(this.elig==false)
      {
        this.stat="USER IS ELIGIBLE!";
        this.route="/applyloan";
      }
    }
    else
    {
      this.stat="SORRY, YOU AREN'T ELIGIBLE!";
    }
  }
}
