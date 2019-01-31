import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Todo, Goal, Query } from "../types";
import {QueriesService} from '../queries.service'


@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  goals: Observable<Goal[]>;
  todos: Observable<Todo[]>;
  selectedGoal: Goal;
  selected: boolean;

  constructor(
    private apollo: Apollo,
    private que: QueriesService
    ) { }

  ngOnInit() {
    this.goals = this.que.getGoals();
  }

  onSelect(goal: Goal): void {
    this.selectedGoal = goal;
    const truthy = !this.selected;
    this.selected = truthy;
  }

  onUpdate(changed: boolean){
    location.reload();
  }
}
