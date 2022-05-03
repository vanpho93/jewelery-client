import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {PREVIOUS_URL} from '../shared/global';

@Injectable({
  providedIn: 'root'
})
export class PreventMemberService implements CanActivate {
  // the previous page redirect to login page
  returnUrl: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams[PREVIOUS_URL] || '/';
    // account already login will be redirec to other page
    if (this.authService.logInStatus()) {
      // return to previous page or home page
      if (this.returnUrl != null) {
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.router.navigateByUrl('/');
      }
      return false;
    } else {
      // account if not login can go to that page
      return true;
    }
  }
}
