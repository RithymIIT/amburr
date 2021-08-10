import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaGenerateTweetPageRoutingModule } from './idea-generate-tweet-routing.module';

import { IdeaGenerateTweetPage } from './idea-generate-tweet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaGenerateTweetPageRoutingModule
  ],
  declarations: [IdeaGenerateTweetPage]
})
export class IdeaGenerateTweetPageModule {}
