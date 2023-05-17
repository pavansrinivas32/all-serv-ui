import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  value: any;
  username = '';
  password: string = '';

  constructor() {}
  button() {
    console.log('username ------------------>  ' + this.username);
    console.log('password ------------------>' + this.password);
  }
}
