import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  suscriptionTodo: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.suscriptionTodo = this.store
      .select('todos')
      .subscribe((todos) => (this.todos = todos));
  }

  ngOnDestroy(): void {
    this.suscriptionTodo.unsubscribe();
  }
}
