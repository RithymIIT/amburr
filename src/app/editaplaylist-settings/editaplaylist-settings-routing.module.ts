import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaplaylistSettingsPage } from './editaplaylist-settings.page';

const routes: Routes = [
  {
    path: '',
    component: EditaplaylistSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaplaylistSettingsPageRoutingModule {}
