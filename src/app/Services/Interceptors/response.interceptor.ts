import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HTTP_CODE } from '../../Constants/httpResponseCodes';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        resp => {
          console.log('Response next handler (empty)', resp);
        },
        error => {
          console.log('Response error handler (empty... There is a special error handler!!!)', error);
        }
      )
    );
  }
}
