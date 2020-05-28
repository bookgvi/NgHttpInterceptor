import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWT } from '../../Model/Login/JWT'
import { Observable, of } from 'rxjs';
import { IJWT } from '../../Model/Login/IJWT';
import { delay, mergeMap, switchMap } from 'rxjs/operators';
import { BASE_URL } from '../../Constants/backendURLs';

@Injectable()
export class Authorization {
  private LOGIN_URL: string = `${BASE_URL}/auth/login`;

  constructor(private http: HttpClient) {
  }

  public login(login: string, password: string): Observable<any> {
    return this.http.post<JWT>(this.LOGIN_URL, { login, password });
  }
}
