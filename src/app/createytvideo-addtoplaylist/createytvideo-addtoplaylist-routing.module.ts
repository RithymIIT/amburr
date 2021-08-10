import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoAddtoplaylistPage } from './createytvideo-addtoplaylist.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoAddtoplaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoAddtoplaylistPageRoutingModule {}
