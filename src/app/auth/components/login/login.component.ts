import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from './../../store/selectors';

import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  handleSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
