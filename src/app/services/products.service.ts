import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProducts } from '../models/products';
import {IUser} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productQuantity = new BehaviorSubject<IProducts[] | []>([]);
  private url: string = 'http://localhost:3000/products';
  private url_shopping_card: string = 'http://localhost:3000/cards';
  private url_users: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProducts[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<IProducts[]>(`${this.url}/${id}`);
  }

  addProduct(product: IProducts) {
    return this.http.post<IProducts>(this.url_shopping_card, product);
  }

  getProductFromCard() {
    return this.http.get<IProducts[]>(this.url_shopping_card);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.url_shopping_card}/${id}`);
  }

  getUsers(user: IUser) {
    return this.http.get<IUser[]>(this.url_users);
  }

}
