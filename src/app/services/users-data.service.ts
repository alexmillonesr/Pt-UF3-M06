import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  users : User[];

  constructor() { 
    this.users = this.createUsers();
  }

  createUsers():User[]{
    let registered_users:User[] = [];
    let usernames = [
      'alexmillones',
      'Dario',
      'Lucas',
      'Mamadou',
      'Miren',
      'Petra',
      'Maria',
      'Lucia',
      'Adam',
      'Jessica',
      'Gael',
      'Fatiha',
      'Xavier',
      'Erica',
      'Bernat',
      'Antia',
      'Leopoldo',
      'Cintia',
      'Juan',
      'Carlos',
      'Elena'
    ];

    let emails = [
      'alexmillones@gmail.com',
      'Dario@gmail.com',
      'Lucas@gmail.com',
      'Mamadou@gmail.com',
      'Miren@gmail.com',
      'Petra@gmail.com',
      'Maria@gmail.com',
      'Lucia@gmail.com',
      'Adam@gmail.com',
      'Jessica@gmail.com',
      'Gael@gmail.com',
      'Fatiha@gmail.com',
      'Xavier@gmail.com',
      'Erica@gmail.com',
      'Bernat@gmail.com',
      'Antia@gmail.com',
      'Leopoldo@gmail.com',
      'Cintia@gmail.com',
      'Juan@gmail.com',
      'Carlos@gmail.com',
      'Elena@gmail.com',
    ];

    const password:string ='12345678'
    
    return registered_users;
  }

  check_login(username:string, password:string):boolean{
    let exist:boolean = false;
    this.users.forEach(user =>{
      if ((user._username === username) && (user._password === password)) {
        exist = true;
      } 
    })
  
    return exist;
   
   }

}
