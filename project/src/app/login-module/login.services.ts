import { ObserversModule } from "@angular/cdk/observers";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, observable, Observable, ReplaySubject, Subject } from "rxjs";


@Injectable()
export class loginServices implements OnInit {

    loggedin: boolean = false;
    loggedin$: any = new Subject();
    username$: any = new Subject();
    navbar$: any = new Subject();


    detail: any[] = [
        { email: "admin", password: "admin" },
        { email: "admin1", password: "admin1" },
        { email: "admin2", password: "admin2" },
        { email: "admin3", password: "admin3" }
    ]
    username:string="";



    getdetails() {
        return this.detail;
    }
    
    verify(_email: string, _password: string) {
        for (let i = 0; i < this.detail.length; i++) {
            if (this.detail[i].email == _email && this.detail[i].password == _password) {
                this.loggedin = true;
                this.username=this.detail[i].email;
                this.loggedin$.next(this.loggedin);
                this.username$.next(this.username);
                break;
                
            }
            else {
                this.loggedin = false;
            }
        }
        
    }
    ngOnInit(): void {
        
    }



}



