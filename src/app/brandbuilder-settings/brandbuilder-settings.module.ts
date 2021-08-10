import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandbuilderSettingsPageRoutingModule } from './brandbuilder-settings-routing.module';

import { BrandbuilderSettingsPage } from './brandbuilder-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandbuilderSettingsPageRoutingModule
  ],
  declarations: [BrandbuilderSettingsPage]
})
export class BrandbuilderSettingsPageModule {}
