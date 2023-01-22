import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'shopping-card', component: ShoppingCardComponent},
  {path:"**", redirectTo: "", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
