import { createSelector, MemoizedSelector } from '@ngrx/store';

import { BookListStoreSelectors } from './book-list-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  BookListStoreSelectors.selectBookListError,
  (bookListError: string) => {
    return bookListError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  BookListStoreSelectors.selectBookListIsLoading,
  (bookListLoading: boolean) => {
    return bookListLoading;
  }
);
