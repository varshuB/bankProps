import { Component } from '@angular/core';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { RegisterFormComponent } from 'src/app/pages/components/register-form/register-form.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // constructor(private dialog:MatDialog){
  constructor(){

  }

  // openPopUp(){
  //   this.dialog.open(RegisterFormComponent, {
  //     width:'500px',
  //     height:'600px',
  //   })

  // }
}
