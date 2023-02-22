import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Customer } from 'src/app/subjects/models/customer';
import { SubjectService } from 'src/app/subjects/services/subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loggedIn = false;
  customers: Customer[] = [];

  constructor(private authService: AuthService, private subService: SubjectService) {
    this.subService.subjectsObservable$?.subscribe( x => {
      this.customers.push(x);
    })
  }

  stop(){
    this.subService.stop();
  }

  login(): void {
    this.authService.login().subscribe(x => this.loggedIn = x);
  }
}
