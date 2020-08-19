import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';

import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import {
  registerSuccessAction,
  registerFailureAction,
} from './../actions/register.action';
import { AuthService } from './../../services/auth.service';
import { registerAction } from '../actions/register.action';
import { of } from 'rxjs';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser });
          }),

          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
