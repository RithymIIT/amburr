import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAtweetConfirmPageRoutingModule } from './create-atweet-confirm-routing.module';

import { CreateAtweetConfirmPage } from './create-atweet-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAtweetConfirmPageRoutingModule
  ],
  declarations: [CreateAtweetConfirmPage]
})
export class CreateAtweetConfirmPageModule {}
