import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent,resolve: {data: ProductResolver}},
  {path: 'shopping-card', component: ShoppingCardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
