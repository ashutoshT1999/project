import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';

  @Input()
  isloggedin: boolean = false;

  @Input()
  signup: boolean = false;


  isuserloggedin(value: boolean) {
    this.isloggedin = value;
  }
  issignup(value: boolean) {
    this.signup = value;
  }
}
