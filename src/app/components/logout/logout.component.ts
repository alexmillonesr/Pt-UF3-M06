import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private myCookie:CookieService){}

  ngOnInit(): void {

  }

  logout(){
    this.myCookie.delete('cookie');
  }
}
