import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.html',
  styleUrls: ['./todo-form.css']
})
export class TodoFormComponent {
  title = '';
  description = '';
  status = 'in-progress';
  deadline = '';
  errorMessage = '';

  constructor(private router: Router) {}

  addTodo() {
    const now = new Date();
    const deadlineDate = new Date(this.deadline);

    if (!this.title.trim()) {
      this.errorMessage = ' Tiêu đề không được để trống.';
      return;
    }

    if (!this.description.trim()) {
      this.errorMessage = ' Mô tả không được để trống.';
      return;
    }

    if (!this.deadline || isNaN(deadlineDate.getTime()) || deadlineDate < now) {
      this.errorMessage = ' Deadline phải là ngày trong tương lai.';
      return;
    }

    const newTodo = {
      title: this.title.trim(),
      description: this.description.trim(),
      status: 'in-progress',
      deadline: this.deadline
    };

    // Reset form
    this.title = '';
    this.description = '';
    this.deadline = '';
    this.errorMessage = '';

    // Chuyển hướng đến danh sách sau khi thêm
    this.router.navigate(['/list']);
  }
}


/*import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.html',
  styleUrls: ['./todo-form.css']
})
export class TodoFormComponent {
  @Output() todoAdded = new EventEmitter<any>();

  title = '';
  description = '';
  status = 'in-progress';
  deadline = '';
  errorMessage = '';

  addTodo() {
    const now = new Date();
    const deadlineDate = new Date(this.deadline);

    if (!this.title.trim()) {
      this.errorMessage = ' Tiêu đề không được để trống.';
      return;
    }

    if (!this.description.trim()) {
      this.errorMessage = ' Mô tả không được để trống.';
      return;
    }

    if (!this.deadline || isNaN(deadlineDate.getTime()) || deadlineDate < now) {
      this.errorMessage = ' Deadline phải là ngày trong tương lai.';
      return;
    }

    const newTodo = {
      title: this.title.trim(),
      description: this.description.trim(),
      status: 'in-progress',
      deadline: this.deadline
    };

    this.todoAdded.emit(newTodo);

    // Reset form
    this.title = '';
    this.description = '';
    this.deadline = '';
    this.errorMessage = '';
  }
}*/
