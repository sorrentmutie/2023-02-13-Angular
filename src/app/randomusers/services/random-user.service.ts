import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { RandomUserResponse, Result } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private httpClient: HttpClient) { }

 getSmarterRandomUsers(): Observable<Result[]> {
  return  this.httpClient
  .get<RandomUserResponse>(environment.randomUrl)
  .pipe( 
    map(response => {return response.results.filter(
      x => x.gender === 'female'
    )}));
 }

  getRandomUsers() : Observable<RandomUserResponse> {
    return this.httpClient
       .get<RandomUserResponse>(environment.randomUrl)
       .pipe( 
          map( 
            response => {
              const x = response.results.filter(
                result => result.gender === "female"
              );

              return {
                results: x,
                info: response.info
              };
            })
          );
  }


}
