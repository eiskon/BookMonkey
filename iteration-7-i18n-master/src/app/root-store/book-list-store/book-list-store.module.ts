import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookListStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookList', featureReducer),
    EffectsModule.forFeature([BookListStoreEffects])
  ],
  providers: [BookListStoreEffects]
})
export class BookListStoreModule { }
