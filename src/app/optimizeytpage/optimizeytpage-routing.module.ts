import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptimizeytpagePage } from './optimizeytpage.page';

const routes: Routes = [
  {
    path: '',
    component: OptimizeytpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptimizeytpagePageRoutingModule {}
