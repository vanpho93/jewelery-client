import {Injectable} from '@angular/core';
import {TAJR_PERSONAL_DETAILS} from './../shared/global';
import {Observable} from 'rxjs';
import {SessionStorageService} from '../server-side-rendering/storages/session.storage.service';

@Injectable()
export class AuthService {

  constructor(
    private sessionStorageService: SessionStorageService,
  ) {
  }

  // confirm user login or not by try to get user information from cookie
  logInStatus(): Observable<boolean> | Promise<boolean> | boolean {
    // if cookie contain user details available
    if (this.sessionStorageService.get(TAJR_PERSONAL_DETAILS)) {
      return true;
    }
    return false;
  }

  getMemberId() {
    const memberProfile = JSON.parse(this.sessionStorageService.get(TAJR_PERSONAL_DETAILS));
    if (memberProfile) {
      return memberProfile.member_id;
    }
    return null;
  }

}
