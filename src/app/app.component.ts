import { Component } from '@angular/core';
import { ProductsService } from './products/services/products.service';
import { SecondService } from './products/services/second.service';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';
  text = "Prova Footer";
  constructor() {
  }

  changeText() {
    this.text = "Testo Footer Cambiato";
  }
}
