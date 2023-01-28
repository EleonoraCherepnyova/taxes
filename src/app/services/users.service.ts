import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor() { }
private subject = new BehaviorSubject(false);

status() {
  return this.subject.asObservable();
}

userLogIn() {
  return this.subject.next(true);
}

userLogOut() {
  return this.subject.next(false);
}

}
