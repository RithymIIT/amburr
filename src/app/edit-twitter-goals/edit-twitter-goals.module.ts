import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTwitterGoalsPageRoutingModule } from './edit-twitter-goals-routing.module';

import { EditTwitterGoalsPage } from './edit-twitter-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditTwitterGoalsPageRoutingModule
  ],
  declarations: [EditTwitterGoalsPage]
})
export class EditTwitterGoalsPageModule {}
