import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqRes } from 'src/app/reqres';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent {

  reqResObservable:Observable<ReqRes> | null = null;

  constructor(private service: ReqresService){

    service.getTimeRes().subscribe((number) => {
      // number.subscribe(y => console.log(y));
      this.reqResObservable = service.getReqRes();

     } );
  }

  newUser() {
    this.service.newUser('mario','rossi');
  }
}
