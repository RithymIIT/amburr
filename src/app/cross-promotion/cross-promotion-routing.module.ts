import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrossPromotionPage } from './cross-promotion.page';

const routes: Routes = [
  {
    path: '',
    component: CrossPromotionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrossPromotionPageRoutingModule {}
