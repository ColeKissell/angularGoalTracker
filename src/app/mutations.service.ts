import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Goal, Todo, Query } from "./types";
import { Apollo } from 'apollo-angular';





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
  // update todo
  updateTodo(values){
    const update = gql`
    mutation updateTodo($id: ID!, $body: String, $completed: Boolean, $goalId: ID!) {
      updateTodo(id: $id, body: $body, completed: $completed, goalId: $goalId) {
        id
        body
        completed
      }
    }`;

    const result = this.apollo.mutate({
      mutation: update,
      variables:{
        id: values.id,
        body: values.body,
        completed: values.completed,
        goalId: values.goalId
      }})
      .subscribe(({ response }) => {}, (error) => {
        console.log('there was an error sending the query', error);
      });

        return result
  }
  // delete todo
  deleteTodo(values){
    const remover = gql`
    mutation removeTodo($id: ID!) {
      removeTodo(id: $id) {
        id
        body
      }
    }`;

    const result = this.apollo.mutate({
      mutation: remover,
      variables:{
        id: values.id
      }})
      .subscribe(({ response }) => {}, (error) => {
        console.log('there was an error sending the query', error);
      });

        return result
  }



  // add new goal
  addGoal(values){
    const AddGoal = gql`
    mutation addGoal($name: String!, $description: String!, $dueDate: String, $completed: Boolean ) {
      addGoal(name: $name, description: $description, dueDate: $dueDate, completed: $completed) {
        id
        name
      }
    }`;
      const result = this.apollo.mutate({
        mutation: AddGoal,
        variables:{
          name: values.name,
          description: values.description,
          dueDate: values.dueDate,
          completed: values.completed,
        }
      })
      .subscribe(({ response }) => {
      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    return result
  }
  // update goal
  updateGoal(values){
    const update = gql`
    mutation updateGoal($id: ID!, $name: String!, $description: String!, $dueDate: String, $completed: Boolean ) {
      updateGoal(id: $id, name: $name, description: $description, dueDate: $dueDate, completed: $completed) {
        id
        name
      }
    }`;

    const result = this.apollo.mutate({
      mutation: update,
      variables:{
        id: values.id,
        name: values.name,
        description: values.description,
        dueDate: values.dueDate,
        completed: values.completed,
      }})
      .subscribe(({ response }) => {}, (error) => {
        console.log('there was an error sending the query', error);
      });

        return result
  }
  // delete goal
  deleteGoal(values){
    const remover = gql`
    mutation removeGoal($id: ID!) {
      removeGoal(id: $id) {
        id
      }
    }`;

    const result = this.apollo.mutate({
      mutation: remover,
      variables:{
        id: values.id
      }})
      .subscribe(({ response }) => {}, (error) => {
        console.log('there was an error sending the query', error);
      });
        return result
  }

}
