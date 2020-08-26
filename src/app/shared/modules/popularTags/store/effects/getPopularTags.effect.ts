import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { PopularTagsService } from '../../services/popularTags.service';
import { PopularTagType } from '../../../../types/popularTag.type';
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailureAction,
} from '../actions/getPopularTags.action';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((tags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ tags });
          }),

          catchError((error) => {
            return of(getPopularTagsFailureAction(error));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
