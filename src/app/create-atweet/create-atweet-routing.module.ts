import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateATweetPage } from './create-atweet.page';

const routes: Routes = [
  {
    path: '',
    component: CreateATweetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateATweetPageRoutingModule {}
