import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Goal, Todo, Query } from "./types";

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(private apollo: Apollo) { }

  // get name and id of goals
  getGoals() {
    const goals = this.apollo.watchQuery<Query>({
    query: gql`{
      goals{
        id
        name
        description
        dueDate
        completed
        todos{
          body
          id
        }
      }
    }`
    }).valueChanges
    .pipe(
      map(result => result.data.goals)
    );
    return goals
  }

  getTodos() {
    const todos = this.apollo.watchQuery<Query>({
    query: gql`{
      todos{
        id
        body
        completed
        goal{
          name
          id
        }
      }
    }`
    }).valueChanges
    .pipe(
      map(result => result.data.todos)
    );
    return todos
  }

}
