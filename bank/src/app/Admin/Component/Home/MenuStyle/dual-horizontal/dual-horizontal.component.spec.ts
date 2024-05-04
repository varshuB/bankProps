import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualHorizontalComponent } from './dual-horizontal.component';

describe('DualHorizontalComponent', () => {
  let component: DualHorizontalComponent;
  let fixture: ComponentFixture<DualHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DualHorizontalComponent]
    });
    fixture = TestBed.createComponent(DualHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
