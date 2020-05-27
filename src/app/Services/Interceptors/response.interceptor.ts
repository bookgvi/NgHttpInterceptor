import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HTTP_CODE } from '../../Constants/httpResponseCodes';
import { Router } from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = window.localStorage.getItem('jwt');
    return next.handle(req).pipe(
      tap(
        resp => {
        },
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
