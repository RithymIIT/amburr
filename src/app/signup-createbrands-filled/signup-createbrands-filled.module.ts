import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupCreatebrandsFilledPageRoutingModule } from './signup-createbrands-filled-routing.module';

import { SignupCreatebrandsFilledPage } from './signup-createbrands-filled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupCreatebrandsFilledPageRoutingModule
  ],
  declarations: [SignupCreatebrandsFilledPage]
})
export class SignupCreatebrandsFilledPageModule {}
