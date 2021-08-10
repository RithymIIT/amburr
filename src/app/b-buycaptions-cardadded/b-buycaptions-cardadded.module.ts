import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBuycaptionsCardaddedPageRoutingModule } from './b-buycaptions-cardadded-routing.module';

import { BBuycaptionsCardaddedPage } from './b-buycaptions-cardadded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBuycaptionsCardaddedPageRoutingModule
  ],
  declarations: [BBuycaptionsCardaddedPage]
})
export class BBuycaptionsCardaddedPageModule {}
