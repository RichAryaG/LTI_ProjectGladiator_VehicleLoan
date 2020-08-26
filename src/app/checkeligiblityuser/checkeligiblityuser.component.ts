import { Component,OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-checkeligiblityuser',
  templateUrl: './checkeligiblityuser.component.html',
  styleUrls: ['./checkeligiblityuser.component.css']
})
export class CheckeligiblityuserComponent implements OnInit{
  constructor(private router:Router) { }
  userId:string;
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['login']);
    }
  }
  elig: boolean=false;
  route="/checkeligiblityuser";
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
        this.route="/vehicleregister";
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