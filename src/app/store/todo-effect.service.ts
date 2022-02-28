import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ITodo } from '../models/todo.model';
import { carregaTodos, IAppState, setTodos, sucessoCarregaTodos } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{ appStore: IAppState }>
  ) { }

  carregaTodosEffects = createEffect(
    () => this.actions$.pipe(
      ofType(carregaTodos),
      withLatestFrom(this.store.select('appStore').pipe(map(app => app.todos))),
      switchMap(([action, todos]) => {
        if (todos.length === 0) {
          return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
            tap(todos => this.store.dispatch(setTodos({ payload: todos })))
          )
        }

        return EMPTY
      }),
      map(() => sucessoCarregaTodos())
    )
  )
}
