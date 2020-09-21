import { UserProfileService } from './../../services/userProfile.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  getUserProfileAction,
  getUserProfileSuccessAction,
  getUserProfileFailureAction,
} from '../actions/userProfile.action';
import { UserProfileInterface } from '../../types/userProfile.interface';

@Injectable()
export class GetUserProfileEffect {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return getUserProfileSuccessAction({ userProfile });
          }),

          catchError(() => {
            return of(getUserProfileFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}
}
