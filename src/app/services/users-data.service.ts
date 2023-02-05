import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  users : User[];

  private logged_in= new BehaviorSubject(false);
  private user_role= new BehaviorSubject('buyer');

  public login = this.logged_in.asObservable();
  public role = this.user_role.asObservable();

  is_logged(login:boolean){
    this.logged_in.next(login);
  }

  update_role(role:string){
    this.user_role.next(role);
  }

  constructor() { 
    this.users = this.createUsers();
  }

  createUsers():User[]{
    let registered_users:User[] = [];
    let usernames = [
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

    const password:string ='12345678';
    const role:string[] = ['buyer','admin'];
    const civil_status:string[] = ['Soltero/a','Casado/a','Divorciado/a'];
    const gender:string[] = ['Hombre','Mujer','Otros'];
    const information :string[] = ['Deportivo','Cine','Concierto'];

    const user_admin = new User('alexadmin','alexadmin@gmail.com','Soltero/a','Hombre','Deporte','12345678','admin');
    const user_buyer = new User('alexbuyer','alexbuyer@gmail.com','Casado/a','Hombre','Cine','12345678','buyer');
    registered_users.push(...[user_admin,user_buyer]);
    
    for (let i = 0; i < 18; i++) {
      let random = Math.trunc(Math.random() * 20) + 1;
      let random_of_2 = Math.trunc(Math.random() * 2) + 1;
      let random_of_3 = Math.trunc(Math.random() * civil_status.length);

      let user:User = new User(usernames[random],emails[random],civil_status[random_of_3],gender[random_of_3],information[random_of_3]);
      registered_users.push(user);
    }



    return registered_users;
  }

  check_login(username:string, password:string):string{
    let exist:string = '';
    this.users.forEach(user =>{
      if ((user._username === username) && (user._password === password)) {
        exist = user._role;
      } 
    })
  
    return exist;
   
   }

   existUser(username:String):boolean{
    let exist:boolean = false;

    this.users.forEach(user => {
      if (user.username === username) {
        exist = true;
      }
    });
    return exist;
   }

   registerUser(user:User):void{
    this.users.push(user);
   }

}
