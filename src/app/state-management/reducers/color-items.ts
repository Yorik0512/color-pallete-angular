import * as colorItemsAction from '../actions/colorItems';

import { ColorItem } from '@app/models/colorItem.model';


export interface ColorItemsState {
  colorItems: Array<ColorItem>;
  length: any;
}

export const initialState: ColorItemsState = {
  colorItems: [],
  length: ''
}

export function reducer(state = initialState, action: colorItemsAction.Action) {

  switch (action.type) {
    case colorItemsAction.SET_ALL: {
      const colorItems = action.payload;
      return state.colorItems = colorItems;
    }

    case colorItemsAction.SELECT_ALL: {
      return {
        ...state,

      };
    }

    case colorItemsAction.RESET_ALL: {
      const updatedColorItems = [];
      for (let i = 0; i < state.length; i++) {
        const item = {
          id: i,
          color: ''
        };
        updatedColorItems.push(item);
      }
      return updatedColorItems;
    }

    case colorItemsAction.UPDATE_ITEM: {
      const updatedColorItems = [];
      const colorItem = action.payload;
      for (let i = 0; i < state.length; i++) {
        const item = state[i];
        if (item.id === colorItem.id) {
          item.color = colorItem.color;
        }
        updatedColorItems.push(item);
      }
      return updatedColorItems;
    }

    default:
      return state;
  }
}

export const getColorItems = (state: ColorItemsState) => state;
