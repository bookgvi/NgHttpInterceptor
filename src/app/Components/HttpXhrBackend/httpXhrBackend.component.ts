import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse, HttpXhrBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-xhr-backend',
  template: `
    {{ resp | async | json }}
  `,
  providers: [HttpXhrBackend]
})
export class HttpXhrBackendComponent implements OnInit {
  public resp: Observable<HttpEvent<any>>;

  private url: string = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private backend: HttpXhrBackend, private http: HttpClient) {
  }

  ngOnInit() {
    const req = new HttpRequest('GET', this.url); // Этот запрос проходит мимо стандартных интерсепторов
    this.resp = this.backend.handle(req);
  }
}
