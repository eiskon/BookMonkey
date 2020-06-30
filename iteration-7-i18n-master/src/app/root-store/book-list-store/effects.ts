import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';

import { BookStoreService } from 'src/app/shared/book-store.service';

@Injectable()
export class BookListStoreEffects {
  constructor(private dataService: BookStoreService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap((action) =>
      this.dataService.getAll().pipe(
        map(
          books =>
            new featureActions.LoadSuccessAction({books})
        ),
        catchError(error =>
          observableOf(new featureActions.LoadFailureAction({ error }))
        )
      )
    )
  );

}
