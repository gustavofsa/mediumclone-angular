import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleFormComponent } from './components/articleForm/articleForm.component';

@NgModule({
  imports: [CommonModule, BackendErrorMessagesModule, ReactiveFormsModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
