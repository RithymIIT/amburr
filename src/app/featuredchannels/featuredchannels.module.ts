import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedchannelsPageRoutingModule } from './featuredchannels-routing.module';

import { FeaturedchannelsPage } from './featuredchannels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedchannelsPageRoutingModule
  ],
  declarations: [FeaturedchannelsPage]
})
export class FeaturedchannelsPageModule {}
