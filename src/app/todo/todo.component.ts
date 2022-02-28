import { todoSelector } from './../store/app.selectors';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ITodo } from '../models/todo.model';
import { carregaTodos, IAppState, setTodos } from '../store/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos$ = this.store.select(todoSelector);

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(carregaTodos())
  }

}
