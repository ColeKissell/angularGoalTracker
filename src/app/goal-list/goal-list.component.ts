import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Todo, Goal, Query } from "../types";
@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  goals: Observable<Goal[]>;
  todos: Observable<Todo[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.goals = this.apollo.watchQuery<Query>({
      query: gql`{
        goals{
          id
          name
          description
          dueDate
          completed
          todos{
            body
          }
        }
      }`
    }).valueChanges
    .pipe(
      map(result => result.data.goals)
    );
  }


}
