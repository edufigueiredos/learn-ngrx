import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 0
};

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');
export const defineContador = createAction('[App] Define contador', props<{ payload: number }>());

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
  })
)
