import {Component, HostListener, OnInit} from '@angular/core';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-listing-items-carousel-modal',
  templateUrl: './listing-items-carousel-modal.component.html',
  styleUrls: ['./listing-items-carousel-modal.component.css']
})
export class ListingItemsCarouselModalComponent implements OnInit {
  // array content photos
  public photoList = [];
  // width of screen size on browser
  public screenWidth: number;
  public activeSlideIndex = 1;
  public mainCarouselListItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ListingItemsCarouselModalComponent>
  ) {
  }

  ngOnInit() {
    // get width of device
    this.screenWidth = window.innerWidth;

    // if photo list has item will show on modal
    if (this.data && this.data.photolist && 0 < this.data.photolist.length) {
      this.photoList = this.data.photolist;
      this.activeSlideIndex = this.data.index;
    }
  }

  /**
   * even on carousel item when init swiper
   * @param swiper swiper event
   */
  onSwiper(swiper) {
    this.mainCarouselListItem = swiper;
    this.mainCarouselListItem.slideTo(this.activeSlideIndex, false, false);
  }

  /**
   * even on carousel item when change slide
   * @param swiper swiper event
   */
  onSlideChange(swiper) {
    this.activeSlideIndex = swiper.realIndex;
  }

  /**
   * use HostListener to  updated on resize:
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event) {
    this.screenWidth = window.innerWidth;
  }

  /**
   * close modal
   */
  closeModal() {
    this.dialogRef.close(ListingItemsCarouselModalComponent);
  }
}



