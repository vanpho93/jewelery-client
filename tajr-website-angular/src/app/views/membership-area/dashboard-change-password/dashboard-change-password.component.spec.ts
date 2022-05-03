import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardChangePasswordComponent } from './dashboard-change-password.component';

describe('DashboardChangePasswordComponent', () => {
  let component: DashboardChangePasswordComponent;
  let fixture: ComponentFixture<DashboardChangePasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
