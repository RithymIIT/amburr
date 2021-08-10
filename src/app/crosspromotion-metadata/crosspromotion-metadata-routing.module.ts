import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrosspromotionMetadataPage } from './crosspromotion-metadata.page';

const routes: Routes = [
  {
    path: '',
    component: CrosspromotionMetadataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrosspromotionMetadataPageRoutingModule {}
