import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentcalendarDailyPage } from './contentcalendar-daily.page';

const routes: Routes = [
  {
    path: '',
    component: ContentcalendarDailyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentcalendarDailyPageRoutingModule {}
