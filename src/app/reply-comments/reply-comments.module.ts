import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplyCommentsPageRoutingModule } from './reply-comments-routing.module';

import { ReplyCommentsPage } from './reply-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReplyCommentsPageRoutingModule
  ],
  declarations: [ReplyCommentsPage]
})
export class ReplyCommentsPageModule {}
