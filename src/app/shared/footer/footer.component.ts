import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ ProductsService]
})
export class FooterComponent implements OnChanges {
  @Input() text:string = ""; 

  constructor(public service: ProductsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }




}
