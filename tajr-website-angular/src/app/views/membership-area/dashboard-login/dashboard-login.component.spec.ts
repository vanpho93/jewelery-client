import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardLoginComponent } from './dashboard-login.component';

describe('DashboardLoginComponent', () => {
  let component: DashboardLoginComponent;
  let fixture: ComponentFixture<DashboardLoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
