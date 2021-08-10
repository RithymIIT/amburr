import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupCreatebrandsPage } from './signup-createbrands.page';

const routes: Routes = [
  {
    path: '',
    component: SignupCreatebrandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupCreatebrandsPageRoutingModule {}
