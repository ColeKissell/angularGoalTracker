import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

// Add your project credentials
// Then use it in the imports section below
const yourFirebaseConfig = {
  apiKey: 'AIzaSyDNtX317n0o6xIfDHQKQp1pqbuVqn-NAq4',
  authDomain: 'life-manager-227504.firebaseapp.com',
  databaseURL: 'https://life-manager-227504.firebaseio.com',
  projectId: 'life-manager-227504',
  storageBucket: 'life-manager-227504.appspot.com',
  messagingSenderId: '289902267625'
};

// Delete Me!
// import { environment.firebase } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CalendarListComponent,
    CalendarDetailComponent,
    CalendarFormComponent,
    GoalListComponent,
    GoalDetailComponent,
    GoalFormComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(yourFirebaseConfig),
    AngularFireAuthModule, 
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
