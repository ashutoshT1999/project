import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginServices } from './login.services';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [loginServices]
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  details: any[] = [];

  constructor(public _details: loginServices, private router: Router) {

  }
  email: string = "";
  password: string = "";
  _login: boolean = true;
  sign: boolean = false;

  ngOnInit(): void {
    
  }
  click() {
    this._details.verify(this.email, this.password);
    // console.log(this._details);
    this._login = this._details.loggedin;
    // console.log(this._login);
    if (this._details.loggedin === true){
      this.router.navigate(["/employee"]);
    }
    else this._login===false;
  }

  cl() {
    this.router.navigate(["/signup"]);
  }

saveLogin(data: NgForm) { }

}
