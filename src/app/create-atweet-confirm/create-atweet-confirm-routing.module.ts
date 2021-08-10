import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAtweetConfirmPage } from './create-atweet-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAtweetConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAtweetConfirmPageRoutingModule {}
