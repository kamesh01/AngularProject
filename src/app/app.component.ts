import { Component } from '@angular/core';
// import {trigger,animate,style,transition,keyframes} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  confirmAdd: boolean;
  todos = [];
  isEmpty = true;
  checkEmpty() {
    if (this.todos.length <= 0) {
      this.isEmpty = true;
    }
    else {
      this.isEmpty = false;
    }
  }
  addTask(data: string) {
    console.log(typeof(data));
    this.checkEmpty();
    if (data == "") {
      alert('Enter any task, its value can not be empty'.toUpperCase());
    } else {
      this.todos.push(data);
      this.isEmpty = false;
    }
  }

  deleteTask(todo:any) {
    for (let i = 0; i <= this.todos.length; i++) {
      if (todo == this.todos[i]) {
        this.todos.splice(i, 1);
      }
    }
    this.checkEmpty();
  }
  clearAll() {
    this.todos.length = 0;
    this.checkEmpty();
  }

  todoSubmit(value:any) {
    console.log(value);
  }
}
