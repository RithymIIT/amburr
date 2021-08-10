import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateYTVideoPageRoutingModule } from './create-yt-video-routing.module';

import { CreateYTVideoPage } from './create-yt-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateYTVideoPageRoutingModule
  ],
  declarations: [CreateYTVideoPage]
})
export class CreateYTVideoPageModule {}
