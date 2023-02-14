import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserResponse, Result } from '../../models/user';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-random-user-page',
  templateUrl: './random-user-page.component.html'
})
export class RandomUserPageComponent {

    users: Observable<Result[]> | null = null;

    constructor(private service: RandomUserService) {
       this.users = this.service.getSmarterRandomUsers();
    }
}
