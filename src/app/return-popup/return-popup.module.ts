import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnPopupPageRoutingModule } from './return-popup-routing.module';

import { ReturnPopupPage } from './return-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnPopupPageRoutingModule
  ],
  declarations: [ReturnPopupPage]
})
export class ReturnPopupPageModule {}
