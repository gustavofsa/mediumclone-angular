import { GetFeedResponseInterface } from './../../types/getFeedResponse.interface';
import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
