import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ABuycaptionsPageRoutingModule } from './a-buycaptions-routing.module';

import { ABuycaptionsPage } from './a-buycaptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ABuycaptionsPageRoutingModule
  ],
  declarations: [ABuycaptionsPage]
})
export class ABuycaptionsPageModule {}
