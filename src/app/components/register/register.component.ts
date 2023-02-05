import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:UsersDataService,private router:Router){}
  
  user!:User;

  existing_user!:boolean;
  
  username!: string;
  password!: string;
  password_confirmation!: string;
  email!: string;
  civil_status: any = ['Soltero/a','Casado/a','Divorciado/a'];
  gender: any = ['Hombre','Mujer','Otro','Prefiero no decirlo'];
  // gender: any = [
  //   {name:'Hombre'},
  //   {name:'Mujer'},
  //   {name:'Otro'},
  //   {name:'Prefiero no decirlo'},
  // ];
  information: any = ['Deportivo','Cine','Concierto'];
  accept_conditions!: any;

  formRegister = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
      Validators.pattern('^[a-zA-Z0-9]+$')
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]+')
    ]),
    password_confirmation: new FormControl('',[
      Validators.required
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    civil_status: new FormControl('',[
      Validators.required
    ]),
    gender: new FormControl('',[
      Validators.required
    ]),
    information: new FormControl(''),
    accept_conditions: new FormControl('',[
      Validators.requiredTrue
    ])

  })
  
  ngOnInit():void{
    this.username = '';
    this.password = '';
    this.email = '';
    this.existing_user = false;
  }

  submit(){
    const DEFAULT_ROL: string = 'buyer';
    this.user = new User(
      this.formRegister.value.username!,
      this.formRegister.value.email!,
      this.formRegister.value.civil_status!,
      this.formRegister.value.gender!,
      this.formRegister.value.information!,
      this.formRegister.value.password!,
      DEFAULT_ROL
    );
    this.existing_user = this.service.existUser(this.user.username);
    if (!this.existing_user) {
      this.service.registerUser(this.user);
      this.router.navigate(['/login'])
    }
  }


}
