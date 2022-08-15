import { Injectable } from "@angular/core";

@Injectable()
export class loginServices {
    loggedin: boolean = false;

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
}