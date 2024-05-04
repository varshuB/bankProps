import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

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
