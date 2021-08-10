import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandbuilderPpEditPageRoutingModule } from './brandbuilder-pp-edit-routing.module';

import { BrandbuilderPpEditPage } from './brandbuilder-pp-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandbuilderPpEditPageRoutingModule
  ],
  declarations: [BrandbuilderPpEditPage]
})
export class BrandbuilderPpEditPageModule {}
