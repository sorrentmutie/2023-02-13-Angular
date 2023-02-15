import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | null = null;
 // @Output() emitter: EventEmitter<void> = new EventEmitter();

  constructor(private route: ActivatedRoute,
              private router: Router, private service: ProductsService) {
     const id = route.snapshot.paramMap.get('id');
    if(id) {
        this.service.getProductById(parseInt(id, 10)).subscribe(
               p => this.product = p);
    }
  }

  goBack() {
    // this.emitter.emit();
    this.router.navigate(["/products"]);
  }
}
