import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoSuggestionsPage } from './createytvideo-suggestions.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoSuggestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoSuggestionsPageRoutingModule {}
