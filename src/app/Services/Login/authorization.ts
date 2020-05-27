import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWT } from './JWT'
import { Observable } from 'rxjs';

@Injectable()
export class Authorization {
  private LOGIN_URL: string = 'https://pre.ugoloc.ucann.ru/api/auth/login';
  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<JWT> {
    return this.http.post<JWT>(this.LOGIN_URL, { username, password });
  }
}
