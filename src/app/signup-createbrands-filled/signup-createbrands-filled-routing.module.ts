import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupCreatebrandsFilledPage } from './signup-createbrands-filled.page';

const routes: Routes = [
  {
    path: '',
    component: SignupCreatebrandsFilledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupCreatebrandsFilledPageRoutingModule {}
