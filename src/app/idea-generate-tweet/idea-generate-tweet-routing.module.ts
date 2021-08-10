import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaGenerateTweetPage } from './idea-generate-tweet.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaGenerateTweetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaGenerateTweetPageRoutingModule {}
