import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditYoutubeGoalsPage } from './edit-youtube-goals.page';

const routes: Routes = [
  {
    path: '',
    component: EditYoutubeGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditYoutubeGoalsPageRoutingModule {}
