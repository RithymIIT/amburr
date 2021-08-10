import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedchannelsSearchPageRoutingModule } from './featuredchannels-search-routing.module';

import { FeaturedchannelsSearchPage } from './featuredchannels-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedchannelsSearchPageRoutingModule
  ],
  declarations: [FeaturedchannelsSearchPage]
})
export class FeaturedchannelsSearchPageModule {}
