import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnDestroy {
  products: Product[] | null = null;
  productsNotInStock: Product[] | null = null;
  //selectedProduct: Product | null = null;
  title = "Elenco Prodotti";
  randomNumber = 0;
  subscription: Subscription | null = null;

  constructor(private router:Router, private service: ProductsService) {
    //const service = new ProductsService();
    this.subscription = service.getProductsFromAPI().subscribe( prodotti => {
      this.products = prodotti
    });
    this.productsNotInStock = service.getProductsToBeReordered();
    this.randomNumber = service.getRandomNumber();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onDetails(selectedProduct: Product) {
   // this.selectedProduct = selectedProduct;
   this.router.navigate(['/products', selectedProduct.id]);
  }

  onRemove(selectedProduct: Product) {
    const newData: Product[] = []
    this.productsNotInStock?.forEach(
      p => {
        if(p.id !== selectedProduct.id) {
          newData.push(p);
        }
      }
    );
    this.productsNotInStock = newData;
  }

  // seeProducts() {
   // this.selectedProduct = null;
  //}

}
