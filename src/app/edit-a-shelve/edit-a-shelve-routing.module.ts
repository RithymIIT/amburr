import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAShelvePage } from './edit-a-shelve.page';

const routes: Routes = [
  {
    path: '',
    component: EditAShelvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAShelvePageRoutingModule {}
