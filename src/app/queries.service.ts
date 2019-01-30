import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Goal, Todo, Query } from "./types";
import { variable } from '@angular/compiler/src/output/output_ast';

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
      }
    }`
    }).valueChanges
    .pipe(
      map(result => result.data.goals)
    );
    return goals
  }

  //get all detials of Goal and body/id of todos attached to goal 

  // get body and id of todo
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
