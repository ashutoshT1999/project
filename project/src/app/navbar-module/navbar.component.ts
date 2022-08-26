import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginModule } from '../login-module/login.module';
import { loginServices } from '../login-module/login.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  // navbar$: any = new Subject();
  constructor(private _data: loginServices) { }
  username: string = "";
  logout: boolean = false;
  ngOnInit(): void {
    this._data.username$.subscribe((data: string) => {
      this.username = data;

    })
  }
  clicknavbar() {
    this._data.navbar$.next(false);
  }

}
