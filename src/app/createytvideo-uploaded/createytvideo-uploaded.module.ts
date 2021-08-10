import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoUploadedPageRoutingModule } from './createytvideo-uploaded-routing.module';

import { CreateytvideoUploadedPage } from './createytvideo-uploaded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoUploadedPageRoutingModule
  ],
  declarations: [CreateytvideoUploadedPage]
})
export class CreateytvideoUploadedPageModule {}
