import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptimizeytpagePageRoutingModule } from './optimizeytpage-routing.module';

import { OptimizeytpagePage } from './optimizeytpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptimizeytpagePageRoutingModule
  ],
  declarations: [OptimizeytpagePage]
})
export class OptimizeytpagePageModule {}
