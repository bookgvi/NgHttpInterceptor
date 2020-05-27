import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWT } from './JWT'
import { Observable, of } from 'rxjs';
import { IJWT } from './IJWT';
import { delay, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class Authorization {
  private LOGIN_URL: string = 'https://pre.ugoloc.ucann.ru/api/auth/login';
  private token: IJWT;

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<JWT>(this.LOGIN_URL, { login: username, password })
      .pipe(
        delay(300),
        mergeMap(({ data }) => {
          this.token = this.setToken(new JWT(data));
          return of(this.token, data.user);
        })
      )
  }

  private setToken(token: JWT): IJWT {
    const { token_type, access_token, expires_at } = { ...token['data'] };
    const jwt = {
      token_type,
      access_token,
      expires_at
    }
    return jwt;
  }
}
