import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrosspromotionChooseVideoPageRoutingModule } from './crosspromotion-choose-video-routing.module';

import { CrosspromotionChooseVideoPage } from './crosspromotion-choose-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrosspromotionChooseVideoPageRoutingModule
  ],
  declarations: [CrosspromotionChooseVideoPage]
})
export class CrosspromotionChooseVideoPageModule {}
