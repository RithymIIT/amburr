import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChennelTrailerSettingsPageRoutingModule } from './chennel-trailer-settings-routing.module';

import { ChennelTrailerSettingsPage } from './chennel-trailer-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChennelTrailerSettingsPageRoutingModule
  ],
  declarations: [ChennelTrailerSettingsPage]
})
export class ChennelTrailerSettingsPageModule {}
