import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABuycaptionsPage } from './a-buycaptions.page';

const routes: Routes = [
  {
    path: '',
    component: ABuycaptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ABuycaptionsPageRoutingModule {}
