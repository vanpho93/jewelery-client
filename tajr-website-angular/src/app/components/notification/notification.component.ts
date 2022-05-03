import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public screenWidth: number;

  constructor() { }

  ngOnInit() {
    // get width of device
    this.screenWidth = window.innerWidth;
  }

  /**
   * use HostListener to  updated on resize:
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  getScreenSize(event) {
    this.screenWidth = window.innerWidth;
  }
}
