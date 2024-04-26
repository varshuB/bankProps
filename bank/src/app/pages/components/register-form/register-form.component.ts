import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {


  openLogin: boolean =true;
  openRegister!: boolean


  login() {
    this.openLogin = true;
    this.openRegister = false;
  }

  register() {
    this.openRegister = true;
    this.openLogin = false;
  }

}
