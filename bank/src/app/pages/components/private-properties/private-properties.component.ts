import { Component } from '@angular/core';

@Component({
  selector: 'app-private-properties',
  templateUrl: './private-properties.component.html',
  styleUrls: ['./private-properties.component.css']
})
export class PrivatePropertiesComponent {

  listViewShow: boolean = false;
  gridViewShow: boolean = true;
  columnGridElements: any;
  btnContainer: any;
  columnListElements: any;

  // listView
  listView(): void {
    this.listViewShow = true;
    this.gridViewShow = false;
    const elements: HTMLElement[] = Array.from(this.columnListElements.nativeElement.getElementsByClassName("column") as HTMLCollectionOf<HTMLElement>);
    elements.forEach(element => {
      element.style.width = "200%";
    });
  }

  // gridView

  gridView(): void {
    this.listViewShow = false;
    this.gridViewShow = true;
    const elements: HTMLElement[] = Array.from(this.columnGridElements.nativeElement.getElementsByClassName("column") as HTMLCollectionOf<HTMLElement>);
    elements.forEach(element => {
      element.style.width = "18rem";
    });
  }
}
