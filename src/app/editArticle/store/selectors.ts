import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EditArticleStateInterface } from '../types/editArticleState.interface';
import { AppStateInterface } from './../../shared/types/appState.interface';

export const editArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>('editArticle');

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) => createArticleState.article
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.isLoading
);

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.validationErrors
);
