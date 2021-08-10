import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAShelvePageRoutingModule } from './add-a-shelve-routing.module';

import { AddAShelvePage } from './add-a-shelve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAShelvePageRoutingModule
  ],
  declarations: [AddAShelvePage]
})
export class AddAShelvePageModule {}
