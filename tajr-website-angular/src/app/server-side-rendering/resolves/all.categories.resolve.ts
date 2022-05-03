import {makeStateKey, TransferState} from '@angular/platform-browser';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AllMotorsCategories} from '../../modules/models/all.motors.categories';
import {ProductService} from '../../services/product.service';
import {TAJR_ALL_CATEGORIES} from '../../shared/global';
import {first, tap} from 'rxjs/operators';

@Injectable()
export class AllCategoriesResolve implements Resolve<AllMotorsCategories> {
  constructor(
    private productService: ProductService,
    private transferState: TransferState) {
  }

  /**
   *
   * @param route acctivated route snapshot
   * @param state router state
   */
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<AllMotorsCategories> {

    const ALL_CATEGORIES = makeStateKey<AllMotorsCategories>(TAJR_ALL_CATEGORIES);
    if (this.transferState.hasKey(ALL_CATEGORIES)) {
      const course = this.transferState.get(ALL_CATEGORIES, null);
      return of(course);
    } else {
      return this.productService.getAllCategories()
        .pipe(
          first(),
          tap(data => {
            this.transferState.set(ALL_CATEGORIES, data);
          })
        );
    }
  }
}
