import { Component } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-bank-properties',
  templateUrl: './bank-properties.component.html',
  styleUrls: ['./bank-properties.component.css']
})
export class BankPropertiesComponent {

  minValue: number = 100;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> Rs. ' + value;
        case LabelType.High:
          return '<b>Max price:</b> Rs. ' + value;
        default:
          return 'Rs. ' + value;
      }
    }
  };

}
