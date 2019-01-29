import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Goal, Query } from "../types";
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  mygoals: Observable<Goal[]>;

  todoForm = new FormGroup({
    todo: new FormControl(''),
    goalId: new FormControl('')
  })

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.mygoals = this.apollo.watchQuery<Query>({
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

}
