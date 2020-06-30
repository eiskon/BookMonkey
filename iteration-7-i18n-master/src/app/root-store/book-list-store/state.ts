import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from '../../shared/book';

export const featureAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: book => book.isbn,
  sortComparer: (a: Book, b: Book): number =>
    b.isbn.toString().localeCompare(a.isbn.toString())
});

export interface State extends EntityState<Book> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
