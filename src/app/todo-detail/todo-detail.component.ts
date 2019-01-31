import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Goal, Todo} from "../types";
import {QueriesService} from '../queries.service'
import {MutationsService} from '../mutations.service'



@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Output() changed: EventEmitter<boolean> = new EventEmitter();
  @Input() todo: Todo ;


  goals: Observable<Goal[]>;
  edit: Boolean;

  constructor(
    private que: QueriesService,
    private mut: MutationsService
    ) { }

  ngOnInit() {
    this.edit = false;
    this.goals = this.que.getGoals();
  }

  editing() {
    const truthy = !this.edit;
    this.edit = truthy;
  }


  SubmitTodo() {
    this.mut.updateTodo(this.todo);
    this.edit=false;
  }

  removeTodo(){
    this.mut.deleteTodo(this.todo)
    this.changedState();
  }
  changedState(): void {
    this.changed.emit(true);
  }
}
