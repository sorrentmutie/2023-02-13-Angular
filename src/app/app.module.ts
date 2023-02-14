import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsHeaderComponent } from './products/shared/products-header/products-header.component';
import { ProductsTableComponent } from './products/components/products-table/products-table.component';
import { FormatProductNamePipe } from './shared/pipes/format-product-name.pipe';
import { FormatAddressPipe } from './shared/pipes/format-address.pipe';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { RandomUserPageComponent } from './randomusers/pages/random-user-page/random-user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    MenuComponent, FooterComponent, ProductsHeaderComponent, ProductsTableComponent, FormatProductNamePipe, FormatAddressPipe, ProductDetailsComponent, RandomUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
