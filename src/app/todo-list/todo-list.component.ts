import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Todo, Query } from "../types";
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  selectedTodo: Todo;
  selected: boolean;
  todos: Observable<Todo[]>
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.selected = false;
    this.todos = this.apollo.watchQuery<Query>({
      query: gql`{
        todos{
          id
          body
          completed
          goal{
            name
          }
        }
      }`
    }).valueChanges
    .pipe(
      map(result => result.data.todos)
    );
  }


  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
    const truthy = !this.selected;
    this.selected = truthy;
  }



}
