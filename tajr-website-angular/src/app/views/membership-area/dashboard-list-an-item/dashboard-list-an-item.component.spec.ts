import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardListAnItemComponent } from './dashboard-list-an-item.component';

describe('DashboardListAnItemComponent', () => {
  let component: DashboardListAnItemComponent;
  let fixture: ComponentFixture<DashboardListAnItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListAnItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListAnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
