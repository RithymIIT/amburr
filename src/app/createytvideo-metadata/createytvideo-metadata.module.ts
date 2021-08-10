import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoMetadataPageRoutingModule } from './createytvideo-metadata-routing.module';

import { CreateytvideoMetadataPage } from './createytvideo-metadata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoMetadataPageRoutingModule
  ],
  declarations: [CreateytvideoMetadataPage]
})
export class CreateytvideoMetadataPageModule {}
