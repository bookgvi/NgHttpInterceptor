import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HTTP_CODE } from '../../Constants/httpResponseCodes';
import { Router } from '@angular/router';

@Injectable()
export class ResponseErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = window.localStorage.getItem('jwt');
    return next.handle(req)
      .pipe(
        catchError(err => {
          if (err.status) {
            switch (err.status) {
              case HTTP_CODE.UNAUTHORIZED:
              case HTTP_CODE.FORBIDDEN:
                if (jwt) {
                  window.localStorage.removeItem('jwt');
                }
                this.router.navigate(['/login']);
                break;
            }
          }
          let { errors = [] } = { ...err.error };
          return throwError(errors);
        })
      );
  }
}
