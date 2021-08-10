import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoUploadvideoPage } from './createytvideo-uploadvideo.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoUploadvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoUploadvideoPageRoutingModule {}
