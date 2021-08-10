import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateYTVideoPage } from './create-yt-video.page';

const routes: Routes = [
  {
    path: '',
    component: CreateYTVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateYTVideoPageRoutingModule {}
