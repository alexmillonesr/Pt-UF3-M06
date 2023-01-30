import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  username!: string;
  password!: string;
  password_confirmation!: string;
  email!: string;
  civil_status: any = ['Soltero/a','Casado/a','Divorciado/a','Viudo/a'];
  gender: any = ['Hombre','Mujer','Otro','Prefiero no decirlo'];
  information: any = ['Teatro','Deportivo','Cine','Concierto'];
  accept_conditions!: any;

  formRegister = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[a-zA-Z]')
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]')
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
}
