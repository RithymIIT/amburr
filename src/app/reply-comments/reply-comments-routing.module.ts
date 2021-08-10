import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReplyCommentsPage } from './reply-comments.page';

const routes: Routes = [
  {
    path: '',
    component: ReplyCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyCommentsPageRoutingModule {}
