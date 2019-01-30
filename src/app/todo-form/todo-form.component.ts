import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Goal, Todo, Query } from "../types";
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  goals: Observable<Goal[]>;


  todoForm = new FormGroup({
    mytodo: new FormControl(),
    completed: new FormControl(false),
    goalId: new FormControl()
  })

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.goals = this.apollo.watchQuery<Query>({
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
  }

  SubmitTodo() {
    event.preventDefault();
    console.log(this.todoForm)
  }
}
