import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatetweetsPage } from './createtweets.page';

const routes: Routes = [
  {
    path: '',
    component: CreatetweetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatetweetsPageRoutingModule {}
