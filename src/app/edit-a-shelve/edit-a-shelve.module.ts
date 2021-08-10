import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAShelvePageRoutingModule } from './edit-a-shelve-routing.module';

import { EditAShelvePage } from './edit-a-shelve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAShelvePageRoutingModule
  ],
  declarations: [EditAShelvePage]
})
export class EditAShelvePageModule {}
