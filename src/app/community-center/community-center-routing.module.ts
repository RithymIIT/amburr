import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityCenterPage } from './community-center.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityCenterPageRoutingModule {}
