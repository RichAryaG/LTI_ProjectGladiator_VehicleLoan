import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable } from 'rxjs';
import { Login } from "./loginClass";
import { Loan } from "./Loan";
import { Vehicle } from './vehicle';
import { Accounts } from './Accounts';
import { UserList } from './UserList';
import { RejectedUserList } from './RejectedUserList';
import { ApprovedUserList } from './ApprovedUserList';
import { PendingUserList } from './PendingUserList';
import { AppliedLoanList } from './AppliedLoanList';



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

    registerAccount(accounts:Accounts):Observable<any>
    {
      
        return this.http.post("http://localhost:8181/registeraccount" ,accounts)

    }

    viewAll():Observable<UserList[]>
    {
      
        return this.http.get<UserList[]>("http://localhost:8181/viewallusers")

    }

    viewRejected():Observable<RejectedUserList[]>
    {
      
        return this.http.get<RejectedUserList[]>("http://localhost:8181/viewrejectedusers")

    }

    viewPending():Observable<PendingUserList[]>
    {
      
        return this.http.get<PendingUserList[]>("http://localhost:8181/viewpendingusers")

    }

    viewApproved():Observable<ApprovedUserList[]>
    {
      
        return this.http.get<ApprovedUserList[]>("http://localhost:8181/viewapprovedusers")

    }

    approveLoan(loanId: Loan):Observable<any>
    {
      
        return this.http.post("http://localhost:8181/approveloan", loanId)

    }

    rejectLoan(loanId: Loan):Observable<any>
    {
      
        return this.http.post("http://localhost:8181/rejectloan", loanId)

    }

    viewloanstatus(user_id: Loan):Observable<AppliedLoanList[]>
    {
      
        return this.http.get<AppliedLoanList[]>('http://localhost:8181/viewloanstatus/'+user_id)

    }


  }
