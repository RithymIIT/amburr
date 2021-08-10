import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrossPromotionThumbnailPageRoutingModule } from './cross-promotion-thumbnail-routing.module';

import { CrossPromotionThumbnailPage } from './cross-promotion-thumbnail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrossPromotionThumbnailPageRoutingModule
  ],
  declarations: [CrossPromotionThumbnailPage]
})
export class CrossPromotionThumbnailPageModule {}
