import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service"
@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
