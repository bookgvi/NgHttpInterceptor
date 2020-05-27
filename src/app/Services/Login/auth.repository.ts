import { Injectable } from '@angular/core';
import { Authorization } from './authorization';
import { Observable } from 'rxjs';
import { IJWT } from './IJWT';

@Injectable()
export class AuthRepository {
  private token: Observable<IJWT>;

  constructor(private auth: Authorization) {
  }

  public login(username: string, password: string): void {
    this.token = this.auth.login(username, password);
  }

  public get getToken(): Observable<IJWT> {
    return this.token;
  }
}
