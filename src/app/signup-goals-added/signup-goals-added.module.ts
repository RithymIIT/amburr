import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupGoalsAddedPageRoutingModule } from './signup-goals-added-routing.module';

import { SignupGoalsAddedPage } from './signup-goals-added.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupGoalsAddedPageRoutingModule
  ],
  declarations: [SignupGoalsAddedPage]
})
export class SignupGoalsAddedPageModule {}
