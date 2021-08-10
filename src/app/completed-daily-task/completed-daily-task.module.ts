import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedDailyTaskPageRoutingModule } from './completed-daily-task-routing.module';

import { CompletedDailyTaskPage } from './completed-daily-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedDailyTaskPageRoutingModule
  ],
  declarations: [CompletedDailyTaskPage]
})
export class CompletedDailyTaskPageModule {}
