import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoCaptionsPage } from './createytvideo-captions.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoCaptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoCaptionsPageRoutingModule {}
