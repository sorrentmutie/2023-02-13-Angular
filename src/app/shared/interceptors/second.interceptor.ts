import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Second Interceptor');
    console.log(request);
    return next.handle(request).pipe(
      map( (evento: HttpEvent<unknown>) => {
        if(evento instanceof HttpResponse){
          console.log(evento);
        }
        return evento;
      }),
      catchError( (error: HttpErrorResponse) => {
        console.log(error);
        // return of();

        return throwError(() => new Error('Errore Grave'));
      })
    );
  }
}
