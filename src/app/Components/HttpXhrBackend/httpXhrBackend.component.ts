import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpXhrBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterceptorsHandlerService } from '../../Services/Interceptors/interceptors.handler.service';
import { RequestInterceptor } from '../../Services/Interceptors/request.interceptor';

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
    const req = new HttpRequest('GET', this.url);
    const handler: HttpHandler = new InterceptorsHandlerService(this.backend, new RequestInterceptor());
    this.resp = this.backend.handle(req); // Этот запрос проходит мимо стандартных интерсепторов
    this.resp = handler.handle(req); // А в этот запрос вручную добавлен интерсептор
  }
}
