import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoUploadingPage } from './createytvideo-uploading.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoUploadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoUploadingPageRoutingModule {}
