import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service'
import {CalItem} from '../Calendar-Item'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {
  @Input() item: CalItem;
  edit: Boolean;
  model = {start: null, startH: "", startM: "", end: null, endH: "", endM: "", description: "", summary: ""}
  hours: number[] = [null];
  minutes: number[] = [null];
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.edit = false;
    this.hours.map((x)=>{
      for(let i=0; i<25; i++){
        if(x==null && i==0) {
          x=0;
          this.hours[0]=x;
        }else{
          x++;
          this.hours.push(x);
        }
      }
    })
    this.minutes.map((x)=>{
      for(let i=0; i<60; i++){
        if(x==null && i==0) {
          x=0;
          this.minutes[0]=x;
        }else{
          x++
          this.minutes.push(x);
        }
      }
    })
    this.model.description = this.item.description;
    this.model.summary = this.item.summary;

    this.model.start = new Date(this.item.start.dateTime)
    this.model.end = new Date(this.item.end.dateTime)
  }

  editing() {
    const truthy = !this.edit;
    this.edit = truthy;
  }

  DeleteEvent(){
    this.auth.deleteEvent(this.item.id)
  }





  UpdateCalItem(){
    console.log(this.model)
    this.formatDates();
    this.auth.editEvent(this.model.start, this.model.end, this.model.summary, this.model.description, this.item.id)
  }

  addStartEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.model.start = event.value
  }

  addEndEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.model.end = event.value
  }

  formatStartDate(){
    const hour = parseInt(this.model.startH);
    const minute = parseInt(this.model.startM);
    let date = this.model.start
    date.setHours(hour);
    date.setMinutes(minute)
    return date;
  }
  formatEndDate(){
    const hour = parseInt(this.model.endH);
    const minute = parseInt(this.model.endM);
    let date = this.model.end
    date.setHours(hour);
    date.setMinutes(minute)
    return date;
  }
  formatDates(){
    this.formatStartDate();
    this.formatEndDate();

  }
}
