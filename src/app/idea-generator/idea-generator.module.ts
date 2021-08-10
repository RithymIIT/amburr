import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaGeneratorPageRoutingModule } from './idea-generator-routing.module';

import { IdeaGeneratorPage } from './idea-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaGeneratorPageRoutingModule
  ],
  declarations: [IdeaGeneratorPage]
})
export class IdeaGeneratorPageModule {}
