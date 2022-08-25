import { Component, Input, OnInit } from '@angular/core';
import { loginServices } from './login-module/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [loginServices]
})
export class AppComponent implements OnInit {
  title = 'project';
  loggedin: boolean = false;

  constructor(private _login: loginServices) {

  }
  ngOnInit(): void {
  
  }

  // @Input()
  // isloggedin: boolean = false;

  // @Input()
  // signup: boolean = false;


  // isuserloggedin(value: boolean) {
  //   this.isloggedin = value;
  // }
  // issignup(value: boolean) {
  //   this.signup = value;
  // }

}
