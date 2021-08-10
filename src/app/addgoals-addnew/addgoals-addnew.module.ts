import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgoalsAddnewPageRoutingModule } from './addgoals-addnew-routing.module';

import { AddgoalsAddnewPage } from './addgoals-addnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgoalsAddnewPageRoutingModule
  ],
  declarations: [AddgoalsAddnewPage]
})
export class AddgoalsAddnewPageModule {}
