import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { RegisterRequestInterface } from './../../types/registerRequest.interface';
import { registerAction } from '../../store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
