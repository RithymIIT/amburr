import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatetweetsPageRoutingModule } from './createtweets-routing.module';

import { CreatetweetsPage } from './createtweets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatetweetsPageRoutingModule
  ],
  declarations: [CreatetweetsPage]
})
export class CreatetweetsPageModule {}
