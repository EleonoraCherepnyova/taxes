import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/products';
import {Subscription} from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProducts[] = [];
  productsSubscription!: Subscription;
  productsToAdd: IProducts[] = [];

  constructor(private srv: ProductsService) { }

  ngOnInit() {
    this.productsSubscription = this.srv.getProducts().subscribe((data)=> {
      this.products = data;
    });
    this.productsSubscription = this.srv.productQuantity.subscribe(arr => {
      this.productsToAdd = arr;
    });
    
  }

  addToShoppingCard(product: IProducts) {
    this.productsToAdd.push(product);
    this.srv.productQuantity.next(this.productsToAdd);
  }

  ngOnDestroy() {
    if(this.productsSubscription) this.productsSubscription.unsubscribe();
  }

}
