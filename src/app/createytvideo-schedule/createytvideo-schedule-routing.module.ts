import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateytvideoSchedulePage } from './createytvideo-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: CreateytvideoSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateytvideoSchedulePageRoutingModule {}
