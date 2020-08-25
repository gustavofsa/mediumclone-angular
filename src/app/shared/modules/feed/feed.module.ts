import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PaginationModule } from './../pagination/pagination.module';
import { LoadingModule } from './../loading/loading.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { FeedComponent } from './components/globalFeed/feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
