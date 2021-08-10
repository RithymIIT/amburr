import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoMetadataPage } from './createytvideo-metadata.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoMetadataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoMetadataPageRoutingModule {}
