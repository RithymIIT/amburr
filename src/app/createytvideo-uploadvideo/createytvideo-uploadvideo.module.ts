import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoUploadvideoPageRoutingModule } from './createytvideo-uploadvideo-routing.module';

import { CreateytvideoUploadvideoPage } from './createytvideo-uploadvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoUploadvideoPageRoutingModule
  ],
  declarations: [CreateytvideoUploadvideoPage]
})
export class CreateytvideoUploadvideoPageModule {}
