import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  token = "MYTOKEN";
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let requestClonata= request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.token)
    });

    if(!requestClonata.headers.has('Content-Type')) {
      requestClonata = requestClonata.clone({
          headers: requestClonata.headers.set('Content-Type', 'application/json')}
      );
    }
    
    console.log('First Interceptor');
    console.log(requestClonata);
    return next.handle(requestClonata);
  }
}
