import { Injectable } from '@angular/core';
import { Authorization } from './authorization';
import { JWT } from './JWT';

@Injectable()
export class AuthRepository {
  private token: JWT;
  constructor(private auth: Authorization) {
  }
  public login(username: string, password: string): void {
    this.auth.login(username, password).subscribe(response => {
      console.log(response);
    })
  }
}
