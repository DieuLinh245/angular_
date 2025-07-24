import { Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form';
//import { TodoFilterComponent } from './components/todo-filter/todo-filter';
import { TodoListComponent } from './components/todo-list/todo-list';

export const routes: Routes = [
  //{ path: '', component: TodoFilterComponent },
  { path: 'add', component: TodoFormComponent },
  { path: 'list', component: TodoListComponent }
];
