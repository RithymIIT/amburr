import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateytvideoAddtoplaylistPageRoutingModule } from './createytvideo-addtoplaylist-routing.module';

import { CreateytvideoAddtoplaylistPage } from './createytvideo-addtoplaylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateytvideoAddtoplaylistPageRoutingModule
  ],
  declarations: [CreateytvideoAddtoplaylistPage]
})
export class CreateytvideoAddtoplaylistPageModule {}
