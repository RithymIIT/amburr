import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupGoalsPage } from './signup-goals.page';

const routes: Routes = [
  {
    path: '',
    component: SignupGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupGoalsPageRoutingModule {}
