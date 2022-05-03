import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListingItemsCarouselModalComponent } from './listing-items-carousel-modal.component';

describe('ListingItemsCarouselModalComponent', () => {
  let component: ListingItemsCarouselModalComponent;
  let fixture: ComponentFixture<ListingItemsCarouselModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingItemsCarouselModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingItemsCarouselModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
