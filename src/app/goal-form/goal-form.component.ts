import { Component, OnInit } from '@angular/core';
import {QueriesService} from '../queries.service';
import {MutationsService} from '../mutations.service';
import { Goal, Todo, Query } from "../types";
import { MyGoal } from "./myGoal";


@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  submitted = false;

  model = new MyGoal("","","",false)


  constructor(
    private que: QueriesService,
    private mut: MutationsService
    ) { }

  ngOnInit() {
  }
  SubmitGoal(){
    this.mut.addGoal(this.model);
    this.submitted=true;
  }
}
