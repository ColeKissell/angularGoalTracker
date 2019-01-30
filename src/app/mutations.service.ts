import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Goal, Todo, Query } from "./types";
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';




@Injectable({
  providedIn: 'root'
})
export class MutationsService {

  constructor(private apollo: Apollo) { }

  // add new Todo
  addTodo(values){
    const AddTodo = gql`
    mutation addTodo($body: String!, $completed: Boolean, $goalId: ID) {
      addTodo(body: $body, completed: $completed, goalId: $goalId) {
        id
        body
      }
    }`;
      const result = this.apollo.mutate({
        mutation: AddTodo,
        variables:{
          body: values.body,
          completed: values.completed,
          goalId: values.goalId
        }})
      .subscribe(({ response }) => {
      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    return result
  }
}
