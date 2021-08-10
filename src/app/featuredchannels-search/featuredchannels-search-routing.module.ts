import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedchannelsSearchPage } from './featuredchannels-search.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturedchannelsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedchannelsSearchPageRoutingModule {}
