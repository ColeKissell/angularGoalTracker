import { Component, OnInit } from '@angular/core';
import { CalItem } from '../Calendar-Item';
import {AuthService} from '../auth.service'
import { getLocaleDateTimeFormat, formatDate } from '@angular/common';



@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit {


  model = {start: "", end: new Date(), description: "", summary: ""}



  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  SubmitCalItem(){
    console.log(this.model)
    this.format();
  }

  format(){
    let time = this.model.start
   const newTime = formatDate(time,"short", "America/Denver" )
    console.log(newTime) 
  }

  hoursFromNow = (n) => 
  new Date(Date.now() + n * 1000 * 60 * 60 ).toISOString();

}
