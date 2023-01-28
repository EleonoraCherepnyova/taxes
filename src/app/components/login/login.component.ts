import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _auth: UsersService, private router: Router, private productSrv: ProductsService) { }

  onLogin() {
    let userData = {
      username: this.form.value.userName,
      password: this.form.value.password
    }
    this.productSrv.getUsers(userData).subscribe((data)=> {
     if(data.some(e => e.username == userData.username && e.password == userData.password)){
      this._auth.userLogIn();
      this.router.navigate(['products']);
     }
    })
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

}
