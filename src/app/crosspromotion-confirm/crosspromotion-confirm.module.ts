import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrosspromotionConfirmPageRoutingModule } from './crosspromotion-confirm-routing.module';

import { CrosspromotionConfirmPage } from './crosspromotion-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrosspromotionConfirmPageRoutingModule
  ],
  declarations: [CrosspromotionConfirmPage]
})
export class CrosspromotionConfirmPageModule {}
