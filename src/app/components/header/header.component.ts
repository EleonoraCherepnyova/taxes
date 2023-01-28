import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productsSubscription!: Subscription;
  quantity: number = 0;
  logged: boolean = false;

  constructor(private srv: ProductsService, private _auth: UsersService, private router: Router) { }

  ngOnInit() {
    this.productsSubscription = this.srv.productQuantity.subscribe(arr => {
      this.quantity = arr.length;
    })

    this._auth.status().subscribe(auth => this.logged = auth)
  }

  onLogOut() {
    this._auth.userLogOut();
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    if(this.productsSubscription) this.productsSubscription.unsubscribe();
  }

}
