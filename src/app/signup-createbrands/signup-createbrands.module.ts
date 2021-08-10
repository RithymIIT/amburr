import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SignupCreatebrandsPageRoutingModule } from "./signup-createbrands-routing.module";

import { SignupCreatebrandsPage } from "./signup-createbrands.page";
import { DragulaModule } from "ng2-dragula";
@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, SignupCreatebrandsPageRoutingModule, DragulaModule.forRoot() ],
	declarations: [ SignupCreatebrandsPage ]
})
export class SignupCreatebrandsPageModule {}
