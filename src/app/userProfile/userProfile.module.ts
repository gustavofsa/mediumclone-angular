import { FeedModule } from './../shared/modules/feed/feed.module';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { UserProfileService } from './services/userProfile.service';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { reducers } from './store/reducers';

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule,
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
