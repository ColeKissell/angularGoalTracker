import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Goal, Todo} from "../types";
import {QueriesService} from '../queries.service'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo ;
  goals: Observable<Goal[]>;
  edit: Boolean;
  // model: new Todo("","", null,"")
  constructor(private que: QueriesService) { }

  ngOnInit() {
    this.edit = false;
    this.goals = this.que.getGoals();
  }

  editing() {
    const truthy = !this.edit;
    this.edit = truthy;
  }


  SubmitTodo() {
    console.log(this.todo)
  }


}
