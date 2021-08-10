import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentcalendarDailyPageRoutingModule } from './contentcalendar-daily-routing.module';

import { ContentcalendarDailyPage } from './contentcalendar-daily.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentcalendarDailyPageRoutingModule
  ],
  declarations: [ContentcalendarDailyPage]
})
export class ContentcalendarDailyPageModule {}
