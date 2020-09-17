import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { EditArticleComponent } from './components/editArticle/editArticle.component';
import { EditArticleService } from './services/editArticle.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { reducers } from './store/reducers';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    LoadingModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
