import {Injectable} from '@angular/core';
import {HttpHelperService} from 'src/app/services/http-helper.service';
import {ApiReferenceService} from 'src/app/shared/api-reference.service';
import {GetListings} from '../modules/models/get.listings';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // listings parameters details send to server
  public getListings: GetListings;

  constructor(
    // sent request service helper
    private http: HttpHelperService,
    // contain api
    private apiReference: ApiReferenceService,
  ) {
  }

  /**
   * Categories - Get all categories
   */
  getAllCategories() {
    return this.http.getAllCategories(this.apiReference.getAllCategories);
  }

  /**
   * Category Details By ID
   */
  getCategoryDetailsByID(categoryId: string) {
    const url = this.apiReference.getCategoryDetailsByID.replace('{categoryId}', categoryId);
    return this.http.getCategoryDetailsByID(url);
  }

}
