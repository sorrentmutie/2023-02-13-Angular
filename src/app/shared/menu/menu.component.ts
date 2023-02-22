import { Component } from '@angular/core';
import { combineLatest, concat, of } from 'rxjs';
import { RandomUserService } from 'src/app/randomusers/services/random-user.service';
import { ReqresService } from 'src/app/reqres/reqres.service';
import { SubjectService } from 'src/app/subjects/services/subject.service';
import { Customer }  from 'src/app/subjects/models/customer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  customers: Customer[] = [];

  constructor(private reqResService: ReqresService, 
    private randomUserService: RandomUserService, private subService: SubjectService){
    const obs1 = of("pippo", "pluto", "paperino");
    const obs2 = of(1,2,3,4);
    const obs3 = reqResService.getReqRes();
    const obs4 = randomUserService.getSmarterRandomUsers();

    const obsconcat = combineLatest([obs3, obs4]);
    obsconcat.subscribe(x => console.log(x));

    this.subService.subjectsObservable$?.subscribe(
      customer => this.customers.push(customer)
    );

    

  }

  start() {
    this.subService.start();
  }

}
