import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AddToFavoritesEffect } from './store/effects/addToFavorites.effect';
import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component';
import { FavoritesService } from './services/favorites.service';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [FavoritesService],
})
export class AddToFavoritesModule {}
