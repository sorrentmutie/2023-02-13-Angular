import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  login(): Observable<boolean> {
     return of(Math.random() > 0.5 ).pipe(
       delay(1000),
       tap (  x => this.isLogged = true )
     )
  }

  logout(): void {
    this.isLogged = false;
  }

   

}
