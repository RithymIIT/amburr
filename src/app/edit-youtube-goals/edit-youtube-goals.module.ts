import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditYoutubeGoalsPageRoutingModule } from './edit-youtube-goals-routing.module';

import { EditYoutubeGoalsPage } from './edit-youtube-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditYoutubeGoalsPageRoutingModule
  ],
  declarations: [EditYoutubeGoalsPage]
})
export class EditYoutubeGoalsPageModule {}
