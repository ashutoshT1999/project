import { ObserversModule } from "@angular/cdk/observers";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, observable, Observable, ReplaySubject, Subject } from "rxjs";


@Injectable()
export class loginServices implements OnInit {

    loggedin: boolean = false;
    loggedinObs: boolean = false;


    detail: any[] = [
        { email: "admin", password: "admin" }
    ]


    getdetails() {
        return this.detail;
    }
    verify(_email: string, _password: string) {
        if (this.detail[0].email == _email && this.detail[0].password == _password) {
            this.loggedin = true;

        }
        else {
            this.loggedin = false;
        }

    }
    ngOnInit(): void {
    }



}



