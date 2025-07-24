import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { TodoFormComponent } from './components/todo-form/todo-form';
import { TodoListComponent } from './components/todo-list/todo-list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  Navbar, CommonModule, TodoFormComponent, TodoListComponent ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'todoweb';
  //todos: any[] = [];

  /*onTodoAdded(todo: any) {
    this.todos.push(todo);
  }
  todoslist = [
    { title: 'Viết báo cáo', description: 'Hoàn thành báo cáo tuần', deadline: '2025-07-20', status: 'in-progress' },
  ];*/
  todos: { title: string; description: string; status: string; deadline: string }[] = [];

  onTodoAdded(todo: any) {
  this.todos.push(todo);
}

}
