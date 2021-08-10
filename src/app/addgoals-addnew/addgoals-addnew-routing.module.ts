import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgoalsAddnewPage } from './addgoals-addnew.page';

const routes: Routes = [
  {
    path: '',
    component: AddgoalsAddnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgoalsAddnewPageRoutingModule {}
