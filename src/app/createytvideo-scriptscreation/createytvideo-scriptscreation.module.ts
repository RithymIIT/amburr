import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoScriptscreationPageRoutingModule } from './createytvideo-scriptscreation-routing.module';

import { CreateytvideoScriptscreationPage } from './createytvideo-scriptscreation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoScriptscreationPageRoutingModule
  ],
  declarations: [CreateytvideoScriptscreationPage]
})
export class CreateytvideoScriptscreationPageModule {}
