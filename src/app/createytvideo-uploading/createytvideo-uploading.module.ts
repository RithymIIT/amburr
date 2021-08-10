import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoUploadingPageRoutingModule } from './createytvideo-uploading-routing.module';

import { CreateytvideoUploadingPage } from './createytvideo-uploading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoUploadingPageRoutingModule
  ],
  declarations: [CreateytvideoUploadingPage]
})
export class CreateytvideoUploadingPageModule {}
