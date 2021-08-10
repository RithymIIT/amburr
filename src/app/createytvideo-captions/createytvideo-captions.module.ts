import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoCaptionsPageRoutingModule } from './createytvideo-captions-routing.module';

import { CreateytvideoCaptionsPage } from './createytvideo-captions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoCaptionsPageRoutingModule
  ],
  declarations: [CreateytvideoCaptionsPage]
})
export class CreateytvideoCaptionsPageModule {}
