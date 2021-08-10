import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoSuggestionsPageRoutingModule } from './createytvideo-suggestions-routing.module';

import { CreateytvideoSuggestionsPage } from './createytvideo-suggestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoSuggestionsPageRoutingModule
  ],
  declarations: [CreateytvideoSuggestionsPage]
})
export class CreateytvideoSuggestionsPageModule {}
