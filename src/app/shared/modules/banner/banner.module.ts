import { BannerComponent } from './components/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class BannerModule {}
