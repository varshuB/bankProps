import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPropertiesComponent } from './bank-properties.component';

describe('BankPropertiesComponent', () => {
  let component: BankPropertiesComponent;
  let fixture: ComponentFixture<BankPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankPropertiesComponent]
    });
    fixture = TestBed.createComponent(BankPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
