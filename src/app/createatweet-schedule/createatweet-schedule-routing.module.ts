import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateatweetSchedulePage } from './createatweet-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: CreateatweetSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateatweetSchedulePageRoutingModule {}
