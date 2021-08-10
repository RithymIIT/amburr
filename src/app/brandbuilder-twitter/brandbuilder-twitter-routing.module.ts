import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandbuilderTwitterPage } from './brandbuilder-twitter.page';

const routes: Routes = [
  {
    path: '',
    component: BrandbuilderTwitterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandbuilderTwitterPageRoutingModule {}
