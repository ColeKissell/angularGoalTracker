import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {QueriesService} from '../queries.service';
import {MutationsService} from '../mutations.service';
import { Goal, Todo, Query } from "../types";
import { MyGoal } from "./myGoal";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  @Output() changed: EventEmitter<boolean> = new EventEmitter();


  model = new MyGoal("","","",false)


  constructor(
    private que: QueriesService,
    private mut: MutationsService
    ) { }

  ngOnInit() {
  }
  SubmitGoal(){
    this.mut.addGoal(this.model);
    this.changedState();
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>){
    const date = event.value.toString();
    this.model.dueDate = date
  }
  changedState(): void {
    this.changed.emit(true);
  }
}
