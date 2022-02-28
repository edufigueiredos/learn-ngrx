import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ITodo } from '../models/todo.model';
import { IAppState, setTodos } from '../store/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos$ = this.store.select('appStore').pipe(map(appStore => appStore.todos));

  constructor(
    private http: HttpClient,
    private store: Store<{appStore: IAppState}>
  ) { }

  ngOnInit(): void {
    this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data: ITodo[]) => {
        this.store.dispatch(setTodos({payload: data}))
      });
  }

}
