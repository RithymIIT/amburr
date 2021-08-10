import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandBuilderPageRoutingModule } from './brand-builder-routing.module';

import { BrandBuilderPage } from './brand-builder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandBuilderPageRoutingModule
  ],
  declarations: [BrandBuilderPage]
})
export class BrandBuilderPageModule {}
