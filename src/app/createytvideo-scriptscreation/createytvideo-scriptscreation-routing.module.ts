import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoScriptscreationPage } from './createytvideo-scriptscreation.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoScriptscreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoScriptscreationPageRoutingModule {}
