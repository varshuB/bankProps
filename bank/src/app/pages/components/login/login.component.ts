import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isShow: boolean = false;
  public hideDiv: boolean  = false

  constructor() {}

  ngOnInit(): void {
    
  }
  indiv() {
    debugger
   this.isShow = !this.isShow;
   this.hideDiv = !this.hideDiv
  }
}
