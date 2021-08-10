import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateATweetWritePageRoutingModule } from './create-a-tweet-write-routing.module';

import { CreateATweetWritePage } from './create-a-tweet-write.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateATweetWritePageRoutingModule
  ],
  declarations: [CreateATweetWritePage]
})
export class CreateATweetWritePageModule {}
