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
  
  is_logged:boolean=false;
  has_logged!:string;
  user_error!:boolean;

  users!:User[];
  username!:string;
  password!:string;
  user_role!:string;

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
    this.has_logged = localStorage.getItem('has_logged')!;

    this.service.login.subscribe(
      login =>{
        this.is_logged = login;
      }
    );

    if (this.has_logged == 'true') {
      this.service.is_logged(true);
      // this.router.navigate(['/events']);
    }else{
      this.service.is_logged(false);
    }

    this.username = '';
    this.password = '';
    this.users = this.service.createUsers();
  }

  submit(){

    this.username = this.formLogin.value.username!;
    this.password = this.formLogin.value.password!;

    this.user_role = this.service.check_login(this.username,this.password); 

    if(this.user_role){
      this.myCookie.set('user_cookie',`${this.username} ${this.user_role}`);

      this.service.is_logged(true);
      localStorage.setItem('has_logged',JSON.stringify(this.is_logged));
      this.router.navigate(['/events'])
    }else{
      this.service.is_logged(false);
      this.user_error = true;
      
    }

  }

}
