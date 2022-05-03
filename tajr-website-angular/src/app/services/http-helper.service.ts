import {GET, POST, PUT, DELETE, EMPTY_VALUE} from '../shared/global';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {LoginDetails} from '../modules/models/login.details';
import {Util} from '../utils/utils';
import {UserChangePassword} from '../modules/models/user.change.password';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  httpParams: HttpParams;
  httpParamss: HttpParams;
  httpHeader: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  /**
   *  login
   * @param url - api
   * @param data -- login details
   */
  LoginAuthentication(url: string, data: LoginDetails): Observable<any> {
    this.httpParams = new HttpParams().set('mobile_number', data.mobile_number).set('password', data.password);
    const req = new HttpRequest(POST, url, this.httpParams, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  /**
   * get user login information
   * @param url -- api
   * @param token - access token
   */
  getLoggedInUserData(url): Observable<any> {
    const req = new HttpRequest(GET, url, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  /**
   * user log out
   * @param url --api
   */
  LogOut(url: string): Observable<any> {
    const req = new HttpRequest(PUT, url, EMPTY_VALUE, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  /**
   * Listings
   * @param url --Get listings
   * @param params? --httpParams
   */
  getListings(url: string, data?: any): Observable<any> {
    // add request params
    const httpParamss = new HttpParams({fromObject: this.clearnRequest(data)});
    const req = new HttpRequest(GET, url, {params: httpParamss, withCredentials: true});
    // send request
    return this.http.request(req);
  }

  getExistListings(url: string, data?: any): Observable<any> {
    // add request params
    const httpParamss = new HttpParams({fromObject: this.clearnRequest(data)});
    // send request
    return this.http.get<any>(url, {params: httpParamss, withCredentials: true});
  }

  getMemberRecentListings(url: string, data?: any): Observable<any> {
    // add request params
    const httpParamss = new HttpParams({fromObject: this.clearnRequest(data)});
    const req = new HttpRequest(GET, url, {params: httpParamss, withCredentials: true});
    // send request
    return this.http.request(req);
  }
  /**
   * Listing by id
   * @param url --Get listings
   * @param id --id
   */
  listingDetails(url: string, id: any): Observable<any> {
    url = url + id;
    const req = new HttpRequest(GET, url, {params: this.httpParamss, withCredentials: true});
    // send request
    return this.http.request(req);
  }

  /**
   *  Registration New MobileNumber
   * @param url - api
   * @param data -- login details
   */
  RegistrationNewMobileNumber(url: string, mobile_number: string): Observable<any> {
    this.httpParams = new HttpParams().set('mobile_number', mobile_number);
    const req = new HttpRequest(POST, url, this.httpParams, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  /**
   * Change user password
   * @param url --Api
   * @param params? --httpParams
   */
  ChangeUserPassword(url: string, data: UserChangePassword): Observable<any> {
    // add request params
    const req = new HttpRequest(PUT, url, data, {withCredentials: true});
    // send request
    return this.http.request(req);
  }


  /**
   *  Registration New MobileNumber
   * @param url - api
   * @param data -- login details
   */
  newPasswordReq(url: string, mobileNumber: string, verificationCode: string, password: string): Observable<any> {
    this.httpParams = new HttpParams().set('mobile_number', mobileNumber).set('verification_code', verificationCode).set('new_password', password);
    const req = new HttpRequest(PUT, url, this.httpParams, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  /**
   * Get all categories
   */
  getAllCategories(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  /**
   * Photos - Get all photo IDs by member.
   */
  getAllPhotosIdByMembers(url: string): Observable<any> {
    const req = new HttpRequest(GET, url, {withCredentials: true});
    // send request
    return this.http.request(req);
  }

  /**
   * Photos - Get all photo IDs by member.
   */
  deletePhotoByMember(url: string): Observable<any> {
    const req = new HttpRequest(DELETE, url, {withCredentials: true});
    // send request
    return this.http.request(req);
  }

  /**
   * Photos - Get meta data.
   */
  getPhotosMetaData(url: string): Observable<any> {
    const req = new HttpRequest(GET, url, {withCredentials: true});
    return this.http.request(req);
  }

  getCategoryDetailsByID(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  /**
   * clear request param, not send parame with empty value
   */
  clearnRequest(data: any): any {
    const formObj = {};
    if (Util.isNotNullOrEmpty(data)) {
      Object.keys(data).forEach(key => {
        if (Util.isNotNullOrEmpty(data[key])) {
          formObj[key] = data[key].toString();
        }
      });
    }

    return formObj;
  }

  getAllReportReasons(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  createReport(url: string, data: any): Observable<any> {
    this.httpParams = new HttpParams().set('listing_id', data.listing_id).set('report_reason_id', data.report_reason_id);
    const req = new HttpRequest(POST, url, this.httpParams, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  deleteToken(url: string, registration_token: any): Observable<any> {
    const req = new HttpRequest(DELETE, url, { registration_token }, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  sendMessage(url: string, data: any): Observable<any> {
    const req = new HttpRequest(POST, url, data, {
      withCredentials: true
    });
    return this.http.request(req);
  }

  updateLastSeen(url: string): Observable<any> {
    const req = new HttpRequest(PUT, url, EMPTY_VALUE, {
      withCredentials: true
    });
    return this.http.request(req);
  }
}

