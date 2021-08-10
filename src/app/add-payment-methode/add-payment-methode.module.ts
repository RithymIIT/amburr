import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPaymentMethodePageRoutingModule } from './add-payment-methode-routing.module';

import { AddPaymentMethodePage } from './add-payment-methode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPaymentMethodePageRoutingModule
  ],
  declarations: [AddPaymentMethodePage]
})
export class AddPaymentMethodePageModule {

  
}
