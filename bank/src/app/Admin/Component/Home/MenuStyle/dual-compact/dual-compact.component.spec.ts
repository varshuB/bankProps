import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualCompactComponent } from './dual-compact.component';

describe('DualCompactComponent', () => {
  let component: DualCompactComponent;
  let fixture: ComponentFixture<DualCompactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DualCompactComponent]
    });
    fixture = TestBed.createComponent(DualCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
