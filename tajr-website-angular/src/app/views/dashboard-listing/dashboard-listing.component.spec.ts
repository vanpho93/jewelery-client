import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardListingComponent } from './dashboard-listing.component';

describe('DashboardListingComponent', () => {
  let component: DashboardListingComponent;
  let fixture: ComponentFixture<DashboardListingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
