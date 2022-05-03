import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardContactComponent } from './dashboard-contact.component';

describe('DashboardContactComponent', () => {
  let component: DashboardContactComponent;
  let fixture: ComponentFixture<DashboardContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
