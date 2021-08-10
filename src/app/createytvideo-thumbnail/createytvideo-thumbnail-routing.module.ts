import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoThumbnailPage } from './createytvideo-thumbnail.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoThumbnailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoThumbnailPageRoutingModule {}
