import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Book } from '../../shared/book';

import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectBookListState: MemoizedSelector<object, State> = createFeatureSelector<State>('bookList');

export const selectAllBooks: (state: object) => Book[] = featureAdapter.getSelectors(selectBookListState).selectAll;


// export const getAllBooks = createSelector(
//   selectBookListState,
//   state => state
// );

// export const getBookByIsbn = createSelector(
//   getAllBooks,
//   (books, props) => books.find(b => b.isbn === props.isbn) //  && b.title === 'Angular'
// );

export const selectBooksByIsbn = (isbn: string) =>
  createSelector(
    this.selectAllBooks,
    (allBooks: Book[]) => {
      if (allBooks) {
        return allBooks.find(p => p.isbn === isbn);
      } else {
        return null;
      }
    }
  );

export const selectBookListError: MemoizedSelector<object, any> = createSelector(
  selectBookListState,
  getError
);

export const selectBookListIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectBookListState,
  getIsLoading
);
