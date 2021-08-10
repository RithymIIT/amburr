import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandBuilderPage } from './brand-builder.page';

const routes: Routes = [
  {
    path: '',
    component: BrandBuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandBuilderPageRoutingModule {}
