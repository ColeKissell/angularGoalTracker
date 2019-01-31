import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Goal, Todo, Query } from "../types";
import {MyTodo} from "./mytodo";
import {QueriesService} from '../queries.service';
import {MutationsService} from '../mutations.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() changed: EventEmitter<boolean> = new EventEmitter();



  goals: Observable<Goal[]>;

  model = new MyTodo("",false,"");



  constructor(
    private que: QueriesService,
    private mut: MutationsService
    ) { }

  ngOnInit() {
    this.goals = this.que.getGoals()
  }

  SubmitTodo(){
    this.mut.addTodo(this.model);
    this.changedState();
  }

  changedState(): void {
    this.changed.emit(true);
  }
}
