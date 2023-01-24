import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})

export class ShoppingCardComponent implements OnInit, OnDestroy {

  constructor(private srv: ProductsService) { }

  shoppingCard: IProducts[] = [];
  shoppingCardSubscription!: Subscription;
  displayedColumns: string[] = ['name', 'price', 'symbol'];
  total!: string;
  taxesSumm!: number;


  ngOnInit() {
    this.srv.productQuantity.subscribe(arr => {
      this.shoppingCard = arr;
    });
    this.calculateTaxes();
  }

  calculateTaxes() {
    let summ = 0;
    this.total = '';
    this.taxesSumm = 0;
    for (let i in this.shoppingCard) {

      if(this.shoppingCard[i].taxed) {
        let tempTaxes = (this.shoppingCard[i].price * 10) / 100;
        this.taxesSumm += this.roundedTo(tempTaxes);
      }
      if(this.shoppingCard[i].imported) {
        let tempTaxes = (this.shoppingCard[i].price * 5) / 100;
        this.taxesSumm += this.roundedTo(tempTaxes);
      }
      summ += this.shoppingCard[i].price;
      this.total = summ.toFixed(2);
    }
  }

  deleteItem(product: IProducts) {
    for(let i in this.shoppingCard) {
      if(product.id === this.shoppingCard[i].id) {
        this.shoppingCard.splice(+i,1);
        break;
      }
    }
    this.srv.productQuantity.next(this.shoppingCard);
    this.calculateTaxes();
  }

  roundedTo(num: number) {
    return Math.round((num / 0.05)) * 0.05;
  }

  ngOnDestroy() {
    if (this.shoppingCardSubscription) this.shoppingCardSubscription.unsubscribe();
  }

}
