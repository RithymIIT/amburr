import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrosspromotionChooseVideoPage } from './crosspromotion-choose-video.page';

const routes: Routes = [
  {
    path: '',
    component: CrosspromotionChooseVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrosspromotionChooseVideoPageRoutingModule {}
