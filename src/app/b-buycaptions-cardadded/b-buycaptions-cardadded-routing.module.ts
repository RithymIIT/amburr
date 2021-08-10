import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BBuycaptionsCardaddedPage } from './b-buycaptions-cardadded.page';

const routes: Routes = [
  {
    path: '',
    component: BBuycaptionsCardaddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BBuycaptionsCardaddedPageRoutingModule {}
