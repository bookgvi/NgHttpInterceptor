import { Injectable } from '@angular/core';
import { Authorization } from './authorization';
import { Observable } from 'rxjs';
import { IJWT } from '../../Model/Login/IJWT';

@Injectable()
export class AuthRepository implements IJWT {
  private token: Observable<IJWT>;

  constructor(private auth: Authorization) {
  }

  public login(username: string, password: string): void {
    this.token = this.auth.login(username, password);
  }

  public get getToken(): Observable<IJWT> {
    return this.token;
  }

  public instanceOfIJWT(obj: Object): obj is IJWT {
    return 'token_type' in obj
  }
}
