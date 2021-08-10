import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoUploadedPage } from './createytvideo-uploaded.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoUploadedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoUploadedPageRoutingModule {}
