import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal, Todo} from "../types";
import {QueriesService} from '../queries.service'
import {MutationsService} from '../mutations.service'



@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
@Input() goal:Goal;
@Output() changed: EventEmitter<boolean> = new EventEmitter();
  edit: Boolean;

constructor(
  private que: QueriesService,
  private mut: MutationsService
  ) { }

  ngOnInit() {
    this.edit = false;
  }

  editing() {
    const truthy = !this.edit;
    this.edit = truthy;
  }

  SubmitGoal() {
    this.mut.updateGoal(this.goal);
    this.edit=false;
  }

  removeGoal(){
    this.mut.deleteGoal(this.goal)
    this.changedState();
  }

  changedState(): void {
    this.changed.emit(true);
  }



}
