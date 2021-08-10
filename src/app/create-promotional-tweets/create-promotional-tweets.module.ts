import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePromotionalTweetsPageRoutingModule } from './create-promotional-tweets-routing.module';

import { CreatePromotionalTweetsPage } from './create-promotional-tweets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePromotionalTweetsPageRoutingModule
  ],
  declarations: [CreatePromotionalTweetsPage]
})
export class CreatePromotionalTweetsPageModule {}
