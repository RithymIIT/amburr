import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoConfirmPage } from './createytvideo-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoConfirmPageRoutingModule {}
