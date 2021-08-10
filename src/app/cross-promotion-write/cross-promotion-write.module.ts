import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrossPromotionWritePageRoutingModule } from './cross-promotion-write-routing.module';

import { CrossPromotionWritePage } from './cross-promotion-write.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrossPromotionWritePageRoutingModule
  ],
  declarations: [CrossPromotionWritePage]
})
export class CrossPromotionWritePageModule {}
