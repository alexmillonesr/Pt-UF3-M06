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
    // this.events = this.eventsRandom();
  }

  // random(list:string[]):number{
  //   let random = Math.trunc(Math.random() * list.length);
 
  //   return random;
  //  }

  //  eventsRandom():Event[]{
  //   let event_array:Event[] = [];
  //   for (let i = 0; i < 100; i++) {
  //     let ran_name:number = this.random(this.event_names);
  //     let ran_type:number = this.random(this.event_types);
  //     let ran_date:number = this.random(this.event_dates);
  //     let ran_dates_obj:Date = new Date(this.event_dates[ran_date]);
  //     let ran_locate:number = this.random(this.locate_event);
  //     let ran_price:number = this.random(this.event_price); 

  //     let event_created = new Event(
  //       i,
  //       this.event_names[ran_name],
  //       this.event_types[ran_type],
  //       this.event_dates[ran_date],
  //       ran_dates_obj,
  //       this.locate_event[ran_locate],
  //       this.event_price[ran_price]
  //       );

  //       event_array.push(event_created)!;
  //   }
  //   return event_array;
  // }
}
