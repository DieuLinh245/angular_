
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../todo-form/todo-form';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoFormComponent],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent {
  editingIndex: number | null = null;
  searchTerm: string = '';
  filterStatus: string = 'all';

  todos=this.loadTodos();
  loadTodos():{
    title: string,
    description: string,
    status: string,
    deadline: string,
    } []  {
    const saved=localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [
      {
        title: 'Làm bài tập Angular',
        description: 'Xây dựng To do web bằng angular',
        status: 'Đang làm',
        deadline: '2025-07-30',
      },
      {
        title: 'Làm bài tập Toán',
        description: 'Làm bài 1, 2 , 3 ',
        status: 'Đang làm',
        deadline: '2025-07-27',
      }
    ];
  }
  get filteredTodos() {
    return this.todos.filter(todos => {
      const matchesSearch = todos.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.filterStatus === 'all' || todos.status === this.filterStatus;
      return matchesSearch && matchesStatus;
    });
  }

  addNewTodo(todo: any) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  startEdit(index: number) {
    this.editingIndex = index;
  }

  cancelEdit() {
    this.editingIndex = null;
  }

  saveEdit(index: number) {
    this.editingIndex = null;
    this.saveToLocalStorage();
  }

  markAsCompleted(index: number) {
    this.todos[index].status = 'completed';
    this.saveToLocalStorage();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
