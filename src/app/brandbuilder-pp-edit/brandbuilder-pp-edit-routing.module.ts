import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandbuilderPpEditPage } from './brandbuilder-pp-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BrandbuilderPpEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandbuilderPpEditPageRoutingModule {}
