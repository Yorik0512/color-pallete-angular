/**
 * Main actions of state.
 */

import { Action } from '@ngrx/store';
import { ColorItem } from '@app/models/colorItem.model';

export const SELECT_ALL = '[Color Items] Select All';
export const SET_ALL = '[Color Items] Set All';
export const RESET_ALL = '[Color Items] Reset All';
export const UPDATE_ITEM = '[Color Items] Item was updated';

export class SelectAll implements Action {
  readonly type = SELECT_ALL;

  constructor(public payload: any) { }
}

export class SetAll implements Action {
  readonly type = SET_ALL;

  constructor(public payload: any) { }
}

export class ResetAll implements Action {
  readonly type = RESET_ALL;
}

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;

  constructor(public payload: any) { }
}

export type Action = SetAll | SelectAll | UpdateItem | ResetAll;
