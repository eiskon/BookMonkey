import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootStoreState, BookListStoreSelectors, BookListStoreActions } from '../../root-store';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  book$: Observable<Book>;

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
    const isbn = this.getIsbn();
    const params = this.route.snapshot.paramMap;
    // this.bs.getSingle(params.get('isbn'))
    //   .subscribe(b => this.book = b);

    this.book$ = this.store$.select(BookListStoreSelectors.selectBooksByIsbn(params.get('isbn')));

    // this.book$ = this.store$.select(BookListStoreSelectors.getBookByIsbn, { isbn });

    this.store$.dispatch(new BookListStoreActions.LoadRequestAction());
  }
  getIsbn() {
    return this.route.snapshot.paramMap.get('isbn');
  }
  getRating(num: number) {
    return new Array(num);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }
}
