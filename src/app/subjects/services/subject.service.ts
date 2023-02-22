import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjects: Subject<Customer> | null = null;
  private interval: any;
  subjectsObservable$: Observable<Customer> | null = null;
  private customers: Customer[] = [];

  constructor() { 
    this.subjects = new Subject();
    this.subjectsObservable$ = this.subjects.asObservable();
  }

  start(){
   this.interval = setInterval( () => {
      const customer = { name: 'Customer ' + this.customers.length, city: 'City ' + Math.random() }
      this.customers.push(customer);
      this.subjects?.next(customer);
   }, 2000);
  }

  stop() {
   clearInterval(this.interval);
  };

}
