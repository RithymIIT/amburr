import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrossPromotionWritePage } from './cross-promotion-write.page';

const routes: Routes = [
  {
    path: '',
    component: CrossPromotionWritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrossPromotionWritePageRoutingModule {}
