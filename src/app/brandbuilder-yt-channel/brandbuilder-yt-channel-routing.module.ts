import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandbuilderYTChannelPage } from './brandbuilder-yt-channel.page';

const routes: Routes = [
  {
    path: '',
    component: BrandbuilderYTChannelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandbuilderYTChannelPageRoutingModule {}
