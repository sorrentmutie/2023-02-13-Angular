import { Injectable } from "@angular/core";
import { provideRouter } from "@angular/router";
import { Product } from "../models/product";
import { DiscountService } from "./discount.service";
import { SecondService } from "./second.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private randomNumber = 0;
  salute: string = "";

  constructor(private secondService: SecondService,
    private discountService: DiscountService) {
     this.randomNumber = Math.random();
     this.salute = this.secondService.doSomething();
  }

  getRandomNumber(): number {
    return this.randomNumber;
  }

  getProducts(): Product[] {
    const products: Product[] = [
      {id: 1, name : "Frigorifero", availability: true,
       arrival: new Date(), category: "Elettrodomestici",
       price: 2000 * this.discountService.getDiscount(1), picture: "https://img.archiexpo.it/images_ae/photo-g/594-15378972.jpg"},
       {id: 2, name : "FRIGO Bar", availability: false,
       arrival: new Date(), category: "Elettrodomestici",
       price: 700.50 * this.discountService.getDiscount(2), picture: "https://img.archiexpo.it/images_ae/photo-g/594-15378972.jpg"}
    ];
    return products;
  }

  getProductsToBeReordered(): Product[] {
    return [
      {id: 3, name : "Lampada", availability: true,
      address: { id: 1, street: 'Via del Pino', state: 'Oceania'},
      arrival: new Date(), category: "Elettrodomestici",
       price: 2000, picture: "https://img.archiexpo.it/images_ae/photo-g/594-15378972.jpg"},

    ]
  }

}
