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


  model = {start: "", end: new Date(), description: "", summary: ""}

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  SubmitCalItem(){
    console.log(this.model)

  }


}
