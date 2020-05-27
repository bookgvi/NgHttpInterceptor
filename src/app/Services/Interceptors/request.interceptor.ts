import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = window.localStorage.getItem('jwt');
    let authReq: HttpRequest<any> = req;
    if (jwt) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', jwt)
      });
    }
    return next.handle(authReq);
  }
}
