import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, groupBy, interval, Observable, timer } from 'rxjs';
import { ReqRes } from '../reqres';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private httpClient: HttpClient) {}

  getReqRes():Observable<ReqRes> {
    return this.httpClient.get<ReqRes>('https://reqres.in/api/users?page=2').pipe(delay(3000));
  }

  getTimeRes():Observable<unknown> {
    return interval(3000).pipe(groupBy(x => x % 2 === 0));
  }

  newUser(name: string, job: string){
    const result = 
      this.httpClient.post<{name:string, job:string}>('https://reqres.in/api/users', 
        {name:name, job:job});
    result.subscribe(next => console.log(next));
  }
}
