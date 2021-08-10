import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrossPromotionPageRoutingModule } from './cross-promotion-routing.module';

import { CrossPromotionPage } from './cross-promotion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrossPromotionPageRoutingModule
  ],
  declarations: [CrossPromotionPage]
})
export class CrossPromotionPageModule {}
