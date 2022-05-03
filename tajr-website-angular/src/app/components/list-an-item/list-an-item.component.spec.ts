import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListAnItemComponent } from './list-an-item.component';

describe('ListAnItemA00001Component', () => {
  let component: ListAnItemComponent;
  let fixture: ComponentFixture<ListAnItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
