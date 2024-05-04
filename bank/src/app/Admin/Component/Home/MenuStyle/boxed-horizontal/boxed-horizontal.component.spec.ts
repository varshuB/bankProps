import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedHorizontalComponent } from './boxed-horizontal.component';

describe('BoxedHorizontalComponent', () => {
  let component: BoxedHorizontalComponent;
  let fixture: ComponentFixture<BoxedHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxedHorizontalComponent]
    });
    fixture = TestBed.createComponent(BoxedHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
