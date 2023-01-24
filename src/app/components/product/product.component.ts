import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: IProducts;
  productSubscription!: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productSubscription = this.route.data.subscribe((data)=> {
      this.product = data['data'];
    })
  }

}
