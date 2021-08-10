import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateATweetPageRoutingModule } from './create-atweet-routing.module';

import { CreateATweetPage } from './create-atweet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateATweetPageRoutingModule
  ],
  declarations: [CreateATweetPage]
})
export class CreateATweetPageModule {}
