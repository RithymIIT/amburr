import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandbuilderYTChannelPageRoutingModule } from './brandbuilder-yt-channel-routing.module';

import { BrandbuilderYTChannelPage } from './brandbuilder-yt-channel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandbuilderYTChannelPageRoutingModule
  ],
  declarations: [BrandbuilderYTChannelPage]
})
export class BrandbuilderYTChannelPageModule {}
