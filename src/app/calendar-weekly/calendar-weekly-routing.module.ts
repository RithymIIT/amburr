import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarWeeklyPage } from './calendar-weekly.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarWeeklyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarWeeklyPageRoutingModule {}
