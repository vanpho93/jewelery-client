import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
/**
 * This service is created by the [root] application injector.
 */
@Injectable({
  providedIn: 'root'
})

/**
 * Using a AuthguardService which implements a single CanActivate method to check if a route can be activated or not
 */
export class AuthguardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.logInStatus()) {
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], {queryParams: {previousUrl: state.url}});
      return false;
    }
  }

}

