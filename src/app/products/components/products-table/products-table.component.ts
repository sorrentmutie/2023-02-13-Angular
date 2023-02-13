import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  @Input() products: Product[] | null = null;
  @Output() emitter: EventEmitter<Product>
     = new EventEmitter();
  @Output() emitterId: EventEmitter<number>
     = new EventEmitter();

  showDetails(selectedProduct: Product){
    console.log(
      'Ho cliccato sul prodotto ' + selectedProduct.id );
    this.emitter.emit(selectedProduct); 
  }
  doSomething(id: number) {
    this.emitterId.emit(id);
  }
}
