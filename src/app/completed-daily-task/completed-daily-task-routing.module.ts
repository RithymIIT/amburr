import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedDailyTaskPage } from './completed-daily-task.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedDailyTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedDailyTaskPageRoutingModule {}
