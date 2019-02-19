import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from "../types";
import {QueriesService} from '../queries.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  selectedTodo: Todo;
  selected: boolean;
  todos: Observable<Todo[]>




  constructor(private que: QueriesService) { }

  ngOnInit() {
    this.selected = false;
    this.todos = this.que.getTodos();
  }


  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
    const truthy = !this.selected;
    this.selected = truthy;
  }

  
  onUpdate(changed: boolean){
    location.reload();
  }


}
