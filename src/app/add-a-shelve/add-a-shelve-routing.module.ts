import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAShelvePage } from './add-a-shelve.page';

const routes: Routes = [
  {
    path: '',
    component: AddAShelvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAShelvePageRoutingModule {}
