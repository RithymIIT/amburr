import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupGoalsPageRoutingModule } from './signup-goals-routing.module';

import { SignupGoalsPage } from './signup-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupGoalsPageRoutingModule
  ],
  declarations: [SignupGoalsPage]
})
export class SignupGoalsPageModule {}
