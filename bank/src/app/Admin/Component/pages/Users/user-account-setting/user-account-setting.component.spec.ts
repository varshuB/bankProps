import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountSettingComponent } from './user-account-setting.component';

describe('UserAccountSettingComponent', () => {
  let component: UserAccountSettingComponent;
  let fixture: ComponentFixture<UserAccountSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAccountSettingComponent]
    });
    fixture = TestBed.createComponent(UserAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
