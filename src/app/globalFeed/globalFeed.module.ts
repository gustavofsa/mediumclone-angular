import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeedModule } from './../shared/modules/feed/feed.module';
import { BannerModule } from './../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
