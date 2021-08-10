import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrosspromotionMetadataPageRoutingModule } from './crosspromotion-metadata-routing.module';

import { CrosspromotionMetadataPage } from './crosspromotion-metadata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrosspromotionMetadataPageRoutingModule
  ],
  declarations: [CrosspromotionMetadataPage]
})
export class CrosspromotionMetadataPageModule {}
