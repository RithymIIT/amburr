import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoThumbnailPageRoutingModule } from './createytvideo-thumbnail-routing.module';

import { CreateytvideoThumbnailPage } from './createytvideo-thumbnail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoThumbnailPageRoutingModule
  ],
  declarations: [CreateytvideoThumbnailPage]
})
export class CreateytvideoThumbnailPageModule {}
