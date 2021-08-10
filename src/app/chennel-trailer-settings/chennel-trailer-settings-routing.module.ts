import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChennelTrailerSettingsPage } from './chennel-trailer-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ChennelTrailerSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChennelTrailerSettingsPageRoutingModule {}
