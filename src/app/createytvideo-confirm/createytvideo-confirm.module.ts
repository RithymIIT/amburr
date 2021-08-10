import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoConfirmPageRoutingModule } from './createytvideo-confirm-routing.module';

import { CreateytvideoConfirmPage } from './createytvideo-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoConfirmPageRoutingModule
  ],
  declarations: [CreateytvideoConfirmPage]
})
export class CreateytvideoConfirmPageModule {}
