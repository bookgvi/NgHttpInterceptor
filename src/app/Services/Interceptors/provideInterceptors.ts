import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { ResponseInterceptor } from './response.interceptor';
import { ResponseErrorInterceptor } from './responseError.interceptor';

export const ProvideInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseErrorInterceptor, multi: true }
]
