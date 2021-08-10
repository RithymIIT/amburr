import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaGeneratorPage } from './idea-generator.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaGeneratorPageRoutingModule {}
