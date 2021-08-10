import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandbuilderTwitterPageRoutingModule } from './brandbuilder-twitter-routing.module';

import { BrandbuilderTwitterPage } from './brandbuilder-twitter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandbuilderTwitterPageRoutingModule
  ],
  declarations: [BrandbuilderTwitterPage]
})
export class BrandbuilderTwitterPageModule {}
