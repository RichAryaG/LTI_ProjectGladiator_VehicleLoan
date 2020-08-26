import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkeligiblity',
  templateUrl: './checkeligiblity.component.html',
  styleUrls: ['./checkeligiblity.component.css']
})
export class CheckeligiblityComponent {
  elig: boolean=false;
  stat:string;
  onroadprice:number;
  monthlysavings:number;
  existingemi:number;
  loantenure:number;
  newemi:number = this.onroadprice/this.loantenure;

  checkeligiblity(){
    if (((this.onroadprice/this.loantenure)+this.existingemi)<=this.monthlysavings)
    {
      if(this.elig==false)
      {
        this.stat="USER IS ELIGIBLE!";
        alert(this.stat);
      }
    }
    else
    {
      this.stat="SORRY, YOU AREN'T ELIGIBLE!";
      alert(this.stat);
      window.location.reload();
    }
  }
}
