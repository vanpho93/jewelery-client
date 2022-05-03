import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpHelperService} from 'src/app/services/http-helper.service';
import {ApiReferenceService} from 'src/app/shared/api-reference.service';
import {SearchModel} from '../modules/models/search.model';
import {UserEditDetails} from '../modules/models/user.edit.details';
import {SessionStorageService} from '../server-side-rendering/storages/session.storage.service';
import {LocalStorageService} from '../server-side-rendering/storages/local.storage.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  public getListings: SearchModel;
  constructor(
    private http: HttpHelperService,
    private apiReference: ApiReferenceService,
    // service send request to login
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {
  }

  /**
   * Used to validate the login credentials.
   * @param loginDetails - entered login details.
   */
  validateUser(loginDetails: any): Observable<any> {
    return this.http.LoginAuthentication(this.apiReference.loginUser, loginDetails).pipe(response => {
      return response;
    });
  }

  /**
   * user details
   * @param accessToken -user login token
   */
  getUserDetail(): Observable<any> {
    return this.http.getLoggedInUserData(this.apiReference.getUserDetails).pipe(userDetails => {
      return userDetails;
    });
  }

  /**
   * uer logout
   */
  logOut(): Observable<any> {
    return this.http.LogOut(this.apiReference.revokeToken).pipe(response => {
      return response;
    });
  }

  /**
   * Registration - Insert a new mobile number.
   * @param mobileNumber -new mobile number.
   */
  registration(mobileNumber: string): Observable<any> {
    return this.http.RegistrationNewMobileNumber(this.apiReference.insertNewMobileNumber, mobileNumber).pipe(response => {
      return response;
    });
  }

  // https://api.tajr.sa/v1/registration/:mobile_number/codes/:verification_code
  getToken() {
    return this.localStorageService.get('token');
  }

}

