import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/services/event-data.service';
import { Event } from 'src/app/models/event';
import { UsersDataService } from 'src/app/services/users-data.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService:EventDataService, private service:UsersDataService, private MyCookie:CookieService){}


  events!:Event[];
  filtered_events!:Event[];

  user_role!:string;
  user_cookie!:string[];

  //pagination
  events_per_page!:number;
  current_page!:number;

  //filter
  filterByPrice!:number;
  selected_location:string = '';
  filterByName!:string;
  locations!:string[];
  

  ngOnInit(): void {
   this.events = this.eventService.eventsRandom()
   this.events_per_page = 8;
   this.current_page = 1;

   this.filtered_events = this.events;
   this.filterByPrice = 40;
   this.filterByName = "";
   this.locations = this.eventService.locate_event;

    this.service.role.subscribe(
      role => {this.user_role = role}
    )

    this.user_cookie = this.MyCookie.get('user_cookie').split('');
    this.service.update_role(this.user_cookie[1]);
  }

  filterEvents(){

    this.filtered_events = this.eventService.events.filter(event => {
      if ( 
        (Number(event._price) <= this.filterByPrice) &&
        (event._locate.indexOf(this.selected_location) !== -1) &&
        (event._name.indexOf(this.filterByName) !== -1) ) {
          return true;
        }
        return false;
    })

  }
}
