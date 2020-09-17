import { AppStateInterface } from './../../shared/types/appState.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';

export const CreateArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>('createArticle');

export const isSubmittingSelector = createSelector(
  CreateArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  CreateArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.validationErrors
);
