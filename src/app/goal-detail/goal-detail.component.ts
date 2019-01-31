import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    this.mut.updateGoal(this.goal)
  }

  removeTodo(){
    this.mut.deleteGoal(this.goal)
    
  }




}
