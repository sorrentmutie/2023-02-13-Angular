import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  getDiscount(id: number): number {
    return id % 2 == 0 ? Math.random() : 1
  }
}
