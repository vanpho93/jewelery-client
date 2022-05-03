import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardNotfoundpageComponent } from './dashboard-notfoundpage.component';

describe('DashboardNotfoundpageComponent', () => {
  let component: DashboardNotfoundpageComponent;
  let fixture: ComponentFixture<DashboardNotfoundpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNotfoundpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotfoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
