import { Action } from '@ngrx/store';
import { Book } from '../../shared/book';

export enum ActionTypes {
  LOAD_REQUEST = '[Book] Load Books Request',
  LOAD_FAILURE = '[Book] Load Books Failure',
  LOAD_SUCCESS = '[Book] Load Books Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { books: Book[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
