import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateatweetSchedulePageRoutingModule } from './createatweet-schedule-routing.module';

import { CreateatweetSchedulePage } from './createatweet-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateatweetSchedulePageRoutingModule
  ],
  declarations: [CreateatweetSchedulePage]
})
export class CreateatweetSchedulePageModule {}
