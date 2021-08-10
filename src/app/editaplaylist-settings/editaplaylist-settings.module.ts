import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaplaylistSettingsPageRoutingModule } from './editaplaylist-settings-routing.module';

import { EditaplaylistSettingsPage } from './editaplaylist-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaplaylistSettingsPageRoutingModule
  ],
  declarations: [EditaplaylistSettingsPage]
})
export class EditaplaylistSettingsPageModule {}
