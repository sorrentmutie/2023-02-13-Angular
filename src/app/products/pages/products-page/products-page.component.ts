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
  selectedProduct: Product | null = null;
  title = "Elenco Prodotti";
  randomNumber = 0;

  constructor(private service: ProductsService) {
    //const service = new ProductsService();
    this.products = service.getProducts();
    this.productsNotInStock = service.getProductsToBeReordered();
    this.randomNumber = service.getRandomNumber();
  }

  onDetails(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
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

  seeProducts() {
    this.selectedProduct = null;
  }

}
