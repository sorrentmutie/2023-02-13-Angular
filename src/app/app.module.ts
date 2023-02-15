import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ReqresComponent } from './reqres/reqres/reqres.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HeroFormComponent } from './hero/components/hero-form/hero-form.component';
import { ReactivePageComponent } from './hero-reactive/reactive-page/reactive-page.component';
import { GotPageComponent } from './got/component/got-page/got-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    MenuComponent, FooterComponent, ProductsHeaderComponent, ProductsTableComponent, FormatProductNamePipe, FormatAddressPipe, ProductDetailsComponent, RandomUserPageComponent, ReqresComponent, NotFoundComponent, HeroFormComponent, ReactivePageComponent, GotPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
