import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { PopularTagsComponent } from './components/popularTags/popularTags.component';
import { PopularTagsService } from './services/popularTags.service';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
