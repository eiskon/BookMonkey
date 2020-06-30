import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { RootStoreState, BookListStoreSelectors, BookListStoreActions } from '../../root-store';



@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  error$: Observable<string>;
  isLoadung$: Observable<boolean>;

  constructor(private bs: BookStoreService, private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    // this.books$ = this.bs.getAll();

    this.books$ = this.store$.select( BookListStoreSelectors.selectAllBooks);
    this.error$ = this.store$.select( BookListStoreSelectors.selectBookListError);
    this.isLoadung$ = this.store$.select( BookListStoreSelectors.selectBookListIsLoading);

    this.store$.dispatch(new BookListStoreActions.LoadRequestAction());
  }
}
