import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  events!:Event[];
  event_names:string[]=['El Mago Pop','Barça-RealMadrid','Avatar: The Way of Water','Maroon 5','El Rey León','Hablando Huevadas'];  
  event_types:string[]=['Teatro','Deportivo','Cine','Concierto','Musicales','Humor'];
  event_dates:string[]=['06-07-2023','05-06-2023','04-09-2023','09-12-2023'];
  locate_event:string[]=['Madrid','Barcelona','Valencia','Sevilla'];
  event_price:string[]=['34,00','169,00','8,90','66,00','18,45','16,80'];

  constructor() { 
    this.events = this.createRandomEvents();
  }

  createRandomEvents():Event[]{
    let event_list:Event[] = [];
    return event_list;
  }
}
