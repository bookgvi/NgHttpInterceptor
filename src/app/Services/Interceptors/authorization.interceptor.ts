import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HTTP_CODE } from '../../Constants/httpResponseCodes';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = window.localStorage.getItem('jwt');
    let authReq: HttpRequest<any> = req;
    if (jwt) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', jwt)
      });
    }
    return next.handle(authReq)
      .pipe(
        tap(
          resp => {},
          error => {
            if (error instanceof HttpErrorResponse) {
              switch (error.status) {
                case HTTP_CODE.UNAUTHORIZED:
                case HTTP_CODE.FORBIDDEN:
                  if (jwt) {
                    window.localStorage.removeItem('jwt');
                  }
                  this.router.navigate(['/login']);
                break;
              }
            }
          }
        ),
        catchError(err => {
          let { errors = [] } = { ...err.error };
          return throwError(errors);
        })
      );
  }
}
