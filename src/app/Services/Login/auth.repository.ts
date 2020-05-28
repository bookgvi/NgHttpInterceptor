import { Injectable } from '@angular/core';
import { Authorization } from './authorization';
import { Observable, of } from 'rxjs';
import { IJWT } from '../../Model/Login/IJWT';
import { delay, mergeMap } from 'rxjs/operators';
import { JWT } from '../../Model/Login/JWT';

@Injectable()
export class AuthRepository implements IJWT {
  private tokenObservable: Observable<IJWT>;
  private token: IJWT;

  constructor(private auth: Authorization) {
  }

  public login(username: string, password: string): void {
    this.tokenObservable = this.auth.login(username, password)
      .pipe(
        delay(300),
        mergeMap(({ data }) => {
          this.token = this.setToken(new JWT(data));
          return of(this.token, data.user);
        })
      );
  }

  public get getToken(): Observable<IJWT> {
    return this.tokenObservable;
  }

  public instanceOfIJWT(obj: Object): obj is IJWT {
    return 'token_type' in obj
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
