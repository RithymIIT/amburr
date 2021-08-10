import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandbuilderSettingsPage } from './brandbuilder-settings.page';

const routes: Routes = [
  {
    path: '',
    component: BrandbuilderSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandbuilderSettingsPageRoutingModule {}
