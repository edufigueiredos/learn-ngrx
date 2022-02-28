import { ITodo } from './../models/todo.model';
import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState {
  counter: number;
  todos: ITodo[];
}

export const appInitialState: IAppState = {
  counter: 2,
  todos: []
};

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');
export const defineContador = createAction('[App] Define contador', props<{ payload: number }>());

export const carregaTodos = createAction('[App] Carrega Todos');
export const setTodos = createAction('[App] Define Todos', props<{ payload: ITodo[] }>());
export const sucessoCarregaTodos = createAction('[App] [Sucesso] Carrega Todos');

export const appReducer = createReducer(
  appInitialState,
  on(incrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrementaContador, (state) => {
    if (state.counter === 0) {
      state = { ...state, counter: 0 }
      return state
    }
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state
  }),
  on(defineContador, (state, { payload }) => {
    state = {
      ...state,
      counter: payload
    }
    return state;
  }),
  on(setTodos, (state, { payload }) => {
    state = {
      ...state,
      todos: payload
    }
    return state;
  })
)
