import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTwitterGoalsPage } from './edit-twitter-goals.page';

const routes: Routes = [
  {
    path: '',
    component: EditTwitterGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTwitterGoalsPageRoutingModule {}
