import { Component, OnInit } from '@angular/core';
import { CalItem } from '../Calendar-Item';
import {AuthService} from '../auth.service'
import { getLocaleDateTimeFormat, formatDate } from '@angular/common';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit {


  model = {start: new Date, startH: "", startM: "", end: new Date, endH: "", endM: "", description: "", summary: ""}
  hours: number[] = [null];
  minutes: number[]= [null];
  





  constructor(private auth: AuthService) { }

  ngOnInit() {
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
  }

  SubmitCalItem(){
    console.log(this.model)
    this.formatDates();
    this.auth.insertEvent(this.model.start, this.model.end, this.model.summary, this.model.description)
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
    console.log( `Start ${date}`)
    date.setHours(hour);
    console.log( `hours ${date}`)
    date.setMinutes(minute)
    console.log( `min ${date}`)
    return date;
  }
  formatEndDate(){
    const hour = parseInt(this.model.endH);
    const minute = parseInt(this.model.endM);
    let date = this.model.end
    console.log( `End ${date}`)
    date.setHours(hour);
    console.log( `hours ${date}`)
    date.setMinutes(minute)
    console.log( `min ${date}`)
    return date;
  }
  formatDates(){
    this.formatStartDate();
    this.formatEndDate();

  }
}
