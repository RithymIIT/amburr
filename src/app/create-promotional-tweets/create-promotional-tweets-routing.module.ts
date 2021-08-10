import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePromotionalTweetsPage } from './create-promotional-tweets.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePromotionalTweetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePromotionalTweetsPageRoutingModule {}
