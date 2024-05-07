import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
id: any;
accordion(ids:any) {
  if(this.id==ids){
    this.id='';
  }
  else{
    this.id=ids;
  }


}

}

  // isAccordionOpenGender:boolean=true;

