import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateATweetWritePage } from './create-a-tweet-write.page';

const routes: Routes = [
  {
    path: '',
    component: CreateATweetWritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateATweetWritePageRoutingModule {}
