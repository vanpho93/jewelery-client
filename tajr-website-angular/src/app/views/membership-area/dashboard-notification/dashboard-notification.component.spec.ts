import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardNotificationComponent } from './dashboard-notification.component';

describe('DashboardNotificationComponent', () => {
  let component: DashboardNotificationComponent;
  let fixture: ComponentFixture<DashboardNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
