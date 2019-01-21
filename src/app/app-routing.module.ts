import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarListComponent} from './calendar-list/calendar-list.component';
import {GoalListComponent} from "./goal-list/goal-list.component";
import {TodoListComponent} from './todo-list/todo-list.component'


const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarListComponent },
  { path: 'goals', component: GoalListComponent },
  { path: 'todos', component: TodoListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
