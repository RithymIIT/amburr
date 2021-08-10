import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityCenterPageRoutingModule } from './community-center-routing.module';

import { CommunityCenterPage } from './community-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityCenterPageRoutingModule
  ],
  declarations: [CommunityCenterPage]
})
export class CommunityCenterPageModule {}
