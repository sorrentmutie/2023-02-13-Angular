import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { filter, map, of, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';
import { Customer } from 'src/app/subjects/models/customer';
import { SubjectService } from 'src/app/subjects/services/subject.service';
import { Order } from '../order';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ ProductsService]
})
export class FooterComponent implements OnChanges,
                                        OnDestroy {
  @Input() text:string = ""; 
  private subscription: Subscription | null = null;
  lastCustomer : Customer | null = null;

  constructor(public service: ProductsService, private subService: SubjectService) {

    this.subService.subjectsObservable$?.subscribe(
      newcustomer => this.lastCustomer = newcustomer
    );

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  doSomething() {
    const myObservable = of(1,2,3,4,5,6,7,8,9,10);
    const mySubscriber = {
      next: (x: any) => console.log(x),
      error: (error: Error) => console.log(error),
      complete: () => console.log('Trasmissione terminata')
    };
    if(!this.subscription) {
      this.subscription = myObservable
      .pipe(
        filter( x => x % 2 ===0),
        map(x => x * 500  ),
        map(x => new Order(x)  ))
      .subscribe(mySubscriber);
    }
  }
}
