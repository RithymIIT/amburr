import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentcalendarMonthPageRoutingModule } from './contentcalendar-month-routing.module';

import { ContentcalendarMonthPage } from './contentcalendar-month.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentcalendarMonthPageRoutingModule
  ],
  declarations: [ContentcalendarMonthPage]
})
export class ContentcalendarMonthPageModule {}
