import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AccountService } from '../../services/account.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${this.accountService.getAuthToken()}`
            }
          });

        return next.handle(req);
    }
    
}