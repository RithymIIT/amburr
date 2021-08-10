import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarWeeklyPageRoutingModule } from './calendar-weekly-routing.module';

import { CalendarWeeklyPage } from './calendar-weekly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarWeeklyPageRoutingModule
  ],
  declarations: [CalendarWeeklyPage]
})
export class CalendarWeeklyPageModule {}
