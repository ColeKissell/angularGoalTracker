import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Goal, Todo, Query } from "../types";
import {MyTodo} from "./mytodo"
import {QueriesService} from '../queries.service'
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  goals: Observable<Goal[]>;

  model = new MyTodo("",false,"");

  submitted = false;


  constructor(
    private apollo: Apollo,
    private que: QueriesService
    ) { }

  ngOnInit() {
    this.goals = this.que.getGoals()
  }

  SubmitTodo(todoAdd = this.model){
    
      const addTodo = this.apollo.mutate({
        mutation: gql`
          mutation addTodo($body: String!, $completed: Boolean, $goalId: String!){
            addTodo(body: $body, completed: $completed, goalId: $goalId){
              id
              body
            }
          }
        `,
        variables:{
        body: todoAdd.body,
        completed: todoAdd.completed,
        goalId: todoAdd.goalId
      },

      })
      console.log(addTodo)
    this.submitted=true;
  }

}
