import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiReferenceService {
  baseUrl = environment.baseUrl;

  constructor() {
  }

  // TODO: Briant Update Api endpoint
  // account api
  getUserDetails = this.baseUrl.concat('/v1/***');
  loginUser = this.baseUrl.concat('/v1/***');
  revokeToken = this.baseUrl.concat('/v1/***');
  insertNewMobileNumber = this.baseUrl.concat('/v1/***');
  // product api
  getAllCategories = this.baseUrl.concat('/v1/***');
  getCategoryDetailsByID = this.baseUrl.concat('/v1/***');


}
