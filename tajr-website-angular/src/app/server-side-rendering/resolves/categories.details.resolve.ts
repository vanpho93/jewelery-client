import {makeStateKey, TransferState} from '@angular/platform-browser';
import { Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProductService} from '../../services/product.service';
import {TAJR_CATEGORIES_DETAILS} from '../../shared/global';
import {first, tap} from 'rxjs/operators';
import {CategoryDetails} from '../../modules/models/category.details';

@Injectable()
export class CategoriesDetailsResolve implements Resolve<CategoryDetails> {
  public categoryIdSlitStr = '';
  public defaultCategoryId = '0001-0100-0200';

  constructor(
    private productService: ProductService,
    private transferState: TransferState) {
    // get categories details by default ID request
    this.categoryIdSlitStr = this.defaultCategoryId.split('-')[2];
  }

  /**
   *
   * @param route acctivated route snapshot
   * @param state router state
   */
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<CategoryDetails> {

    const CATEGORIES = makeStateKey<CategoryDetails>(TAJR_CATEGORIES_DETAILS);
    if (this.transferState.hasKey(CATEGORIES)) {
      const course = this.transferState.get(CATEGORIES, null);
      return of(course);
    } else {
      return this.productService.getCategoryDetailsByID(this.categoryIdSlitStr)
        .pipe(
          first(),
          tap(data => {
            this.transferState.set(CATEGORIES, data);
          })
        );
    }
  }
}
