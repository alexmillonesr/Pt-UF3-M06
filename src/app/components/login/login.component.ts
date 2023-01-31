import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersDataService } from 'src/app/services/users-data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:UsersDataService, private router:Router, private myCookie: CookieService){}
  
  users!:User[];
  username!:string;
  password!:string;
  role!:string;
  user_exists!:boolean;


  formLogin=new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]+$')
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]+')
    ])
  })

  ngOnInit(): void{
    this.username = '';
    this.password = '';
    this.users = this.service.createUsers();
  }

  submit(){

    this.username = this.formLogin.value.username!;
    this.password = this.formLogin.value.password!;
    this.role = 'buyer'; 

    console.log(this.username);
    console.log(this.password);

    this.user_exists = this.service.check_login(this.username, this.password);
    console.log(this.user_exists);

    if(this.user_exists=true){
      this.myCookie.set('cookie',`${this.username} ${this.role}`)
      this.router.navigate(['/events'])
    }

  }

}
