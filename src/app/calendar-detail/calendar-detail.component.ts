import { Component, OnInit, Input } from '@angular/core';
// import { AuthService } from '../auth.service'
import {CalItem} from '../Calendar-Item'

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {
  @Input() item: CalItem;
  constructor() { }

  ngOnInit() {
  }

}
