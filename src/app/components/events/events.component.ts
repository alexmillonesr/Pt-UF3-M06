import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/services/event-data.service';
import { Event } from 'src/app/models/event';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private service:EventDataService){}


  events!:Event[]
  

  ngOnInit(): void {
  //  this.events = this.service.eventsRandom()
  }

}
