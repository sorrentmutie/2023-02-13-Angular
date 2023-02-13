import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  products: Product[] | null = null;
  productsNotInStock: Product[] | null = null;
  title = "Elenco Prodotti";

  constructor() {
    const service = new ProductsService();
    this.products = service.getProducts();
    this.productsNotInStock = service.getProductsToBeReordered();
  }


  onDetails(selectedProduct: Product) {
    alert(selectedProduct.name);
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


}
