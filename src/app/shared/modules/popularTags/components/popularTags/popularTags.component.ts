import { getPopularTagsAction } from './../../store/actions/getPopularTags.action';
import {
  popularTagsSelector,
  errorSelector,
  isLoadingSelector,
} from './../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchPopularTags();
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchPopularTags(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
