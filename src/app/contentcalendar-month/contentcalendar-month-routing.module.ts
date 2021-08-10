import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentcalendarMonthPage } from './contentcalendar-month.page';

const routes: Routes = [
  {
    path: '',
    component: ContentcalendarMonthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentcalendarMonthPageRoutingModule {}
