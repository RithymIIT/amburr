import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandbuilderCoverEditPage } from './brandbuilder-cover-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BrandbuilderCoverEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandbuilderCoverEditPageRoutingModule {}
