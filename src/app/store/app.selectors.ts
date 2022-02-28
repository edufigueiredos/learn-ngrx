import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from './app.state';

export const appSelector = createFeatureSelector<IAppState>('appStore');

export const contadorSelector = createSelector(
  appSelector,
  (state) => state.counter
);

export const todoSelector = createSelector(
  appSelector,
  (state) => state.todos
);
