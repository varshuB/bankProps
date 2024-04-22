import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalOnIBAComponent } from './artical-on-iba.component';

describe('ArticalOnIBAComponent', () => {
  let component: ArticalOnIBAComponent;
  let fixture: ComponentFixture<ArticalOnIBAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticalOnIBAComponent]
    });
    fixture = TestBed.createComponent(ArticalOnIBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
