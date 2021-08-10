import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandbuilderCoverEditPageRoutingModule } from './brandbuilder-cover-edit-routing.module';

import { BrandbuilderCoverEditPage } from './brandbuilder-cover-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandbuilderCoverEditPageRoutingModule
  ],
  declarations: [BrandbuilderCoverEditPage]
})
export class BrandbuilderCoverEditPageModule {}
