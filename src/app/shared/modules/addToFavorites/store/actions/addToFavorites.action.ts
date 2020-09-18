import { createAction, props } from '@ngrx/store';

import { ArticleInterface } from '../../../../../shared/types/article.interface';
import { ActionTypes } from '../actionTypes';

export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>()
);

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);
