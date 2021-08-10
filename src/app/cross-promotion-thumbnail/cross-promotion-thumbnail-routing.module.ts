import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrossPromotionThumbnailPage } from './cross-promotion-thumbnail.page';

const routes: Routes = [
  {
    path: '',
    component: CrossPromotionThumbnailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrossPromotionThumbnailPageRoutingModule {}
