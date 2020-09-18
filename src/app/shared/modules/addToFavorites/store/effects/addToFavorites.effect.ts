import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { FavoritesService } from '../../services/favorites.service';
import { ArticleInterface } from '../../../../types/article.interface';
import {
  addToFavoritesAction,
  addToFavoritesSuccessAction,
  addToFavoritesFailureAction,
} from '../actions/addToFavorites.action';

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.favoritesService.removeFromFavorites(slug)
          : this.favoritesService.addToFavorites(slug);

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article });
          }),

          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private favoritesService: FavoritesService
  ) {}
}
