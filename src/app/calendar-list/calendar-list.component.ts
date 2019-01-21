import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service"
import { CalItem } from '../Calendar-Item';
@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnInit {

  selectedItem: CalItem;
  selected: boolean;
  myItem: CalItem;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.selected = false;
  }

  onSelect(item: CalItem): void {
    this.selectedItem = item;
    const truthy = !this.selected;
    this.selected = truthy;
  }
  // retrieve specific Item ?

  // save edit or submit new
  onSubmit(myItem): void {
    event.preventDefault();
    console.log(myItem)
  }
}
