import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { RandomUserPageComponent } from './randomusers/pages/random-user-page/random-user-page.component';
import { ReqresComponent } from './reqres/reqres/reqres.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
 {path: "products", component: ProductsPageComponent},
 {path: "products/:id", component: ProductDetailsComponent},
 {path: "randomuser", component: RandomUserPageComponent},
 {path: "reqres", component: ReqresComponent},
 {path: "", redirectTo: "products", pathMatch:"full"},
 {path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
