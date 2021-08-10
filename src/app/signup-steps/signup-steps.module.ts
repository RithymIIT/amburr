import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupStepsPageRoutingModule } from './signup-steps-routing.module';

import { SignupStepsPage } from './signup-steps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupStepsPageRoutingModule
  ],
  declarations: [SignupStepsPage]
})
export class SignupStepsPageModule {}
