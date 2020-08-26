import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable } from 'rxjs';
import { Login } from "./loginClass";
import { Loan } from "./Loan";
import { Vehicle } from './vehicle';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {  }
    register(user:User):Observable<any>
    {
        return this.http.post("http://localhost:8181/register",user)
    }

    login(login:Login):Observable<any>
    {
        return this.http.post("http://localhost:8181/loginuser",login) 
    }

    loginadmin(adminlogin:Login):Observable<any>
    { 
        return this.http.post("http://localhost:8181/loginadmin",adminlogin)
    }

    registerloan(loan:Loan):Observable<any>
    {
      return this.http.post("http://localhost:8181/registerloan",loan)
    }
    registerVehicle(vehicle:Vehicle):Observable<any>
    {
      
        return this.http.post("http://localhost:8181/vehicleregister",vehicle)

     
    }

  }
