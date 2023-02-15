import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Episode, Season } from '../models/got';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private service: HttpClient) { 

  }

  getSeasons(): Observable<Season[]>{
    return this.service.get<Season[]>('http://localhost:7001/seasons')
  }
  getEpisodes(seasonId: number): Observable<Episode[]>{
    return this.service.get<Episode[]>('http://localhost:7001/seasons/'+seasonId+'/episodes')
  }
}
