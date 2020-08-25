import { routerNavigationAction } from '@ngrx/router-store';

import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from './actions/getFeed.action';
import { createReducer, on, Action } from '@ngrx/store';
import { FeedStateInterface } from './../types/feedState.interface';

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
);

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
