import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationServices {

  constructor(
    private toastr: ToastrService,
  ) { }

  /**
   * show infor message
   */
  public showInfoNotificationMessage(mess: string) {
    if (mess === undefined) {
      return;
    }
    this.toastr.info(mess, '', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true,
      messageClass: 'small'
    });
  }

  /**
   * show warning message
   */
  public showWarnmingNotificationMessage(mess: string) {
    if (mess === undefined) {
      return;
    }
    this.toastr.warning(mess, '', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true,
      messageClass: 'small'
    });
  }
}
