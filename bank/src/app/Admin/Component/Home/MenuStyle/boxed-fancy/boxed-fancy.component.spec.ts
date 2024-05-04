import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedFancyComponent } from './boxed-fancy.component';

describe('BoxedFancyComponent', () => {
  let component: BoxedFancyComponent;
  let fixture: ComponentFixture<BoxedFancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxedFancyComponent]
    });
    fixture = TestBed.createComponent(BoxedFancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
