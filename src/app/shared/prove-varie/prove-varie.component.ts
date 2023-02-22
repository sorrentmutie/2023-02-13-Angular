import { Component } from '@angular/core';
import { catchError, from, map, of } from 'rxjs';

@Component({
  selector: 'app-prove-varie',
  templateUrl: './prove-varie.component.html',
  styleUrls: ['./prove-varie.component.css']
})
export class ProveVarieComponent {
   srcArray = from([1,2,'A',3,4]);

   constructor(){
    const obs =    this.srcArray.pipe(
        map(valore => {
          let result = valore as number * 2;
          if(Number.isNaN(result)) {
            throw new Error('Hai un errore');
          }
          return result;
        }),
        catchError(errore => {
          console.log('Sono nel catch Error');
          return of(-1);
        })
      );

    obs.subscribe( x => console.log(x));  
   }
}
