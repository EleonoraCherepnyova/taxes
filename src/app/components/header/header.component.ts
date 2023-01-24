import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productsSubscription!: Subscription;
  quantity: number = 0;

  constructor(private srv: ProductsService) { }

  ngOnInit() {
    this.productsSubscription = this.srv.productQuantity.subscribe(arr => {
      this.quantity = arr.length;
    })
  }

  ngOnDestroy() {
    if(this.productsSubscription) this.productsSubscription.unsubscribe();
  }

}
