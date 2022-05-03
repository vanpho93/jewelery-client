import {Injectable} from '@angular/core';
import {Timer} from '../shared/global';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public deltas: string[];
  public timeLeft = Timer.MINUTE_SECOND;
  public interval;

  constructor() {
  }

  /**
   * Converts millseconds value into how long to that moment
   */
  public convertMS(milliSeconds) {
    let day, hour, minute, seconds;
    seconds = Math.floor(milliSeconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
      day,
      hour,
      minute,
      seconds
    };
  }
}
