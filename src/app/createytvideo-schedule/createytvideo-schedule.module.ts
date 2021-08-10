import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoSchedulePageRoutingModule } from './createytvideo-schedule-routing.module';

import { CreateytvideoSchedulePage } from './createytvideo-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoSchedulePageRoutingModule
  ],
  declarations: [CreateytvideoSchedulePage]
})
export class CreateytvideoSchedulePageModule {}
