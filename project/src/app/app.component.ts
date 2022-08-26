import { Component, Input, OnInit } from '@angular/core';
import { loginServices } from './login-module/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project';
  loggedin: boolean = false;
  // loggedout: boolean = false;



  constructor(private _login: loginServices) {

  }
  ngOnInit(): void {
    this._login.loggedin$.subscribe((data: boolean) => {
      this.loggedin = data;
    })
    this._login.navbar$.subscribe((data: boolean) => {
      this.loggedin = data;
    })


  }

}
