import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromColorItems from './color-items';

export interface State {
  colorItems: fromColorItems.ColorItemsState;
}

export const reducers: ActionReducerMap<State> = {
  colorItems: fromColorItems.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getColorItemsState = createFeatureSelector<fromColorItems.ColorItemsState>('colorItems');

export const getColorItems = createSelector(
  getColorItemsState,
  fromColorItems.getColorItems,
);
