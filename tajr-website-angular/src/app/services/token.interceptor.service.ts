import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const authService = this.injector.get(AccountService);

        if (authService) {
            const tokenizedReq = req.clone(
                {
                    headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
                }
            )
            return next.handle(tokenizedReq);
        } else {
            return next.handle(req);
        }
    }
}
