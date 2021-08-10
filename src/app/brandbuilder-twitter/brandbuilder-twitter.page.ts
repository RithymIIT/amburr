import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BrandbuilderCoverEditPage } from '../brandbuilder-cover-edit/brandbuilder-cover-edit.page';
import { BrandbuilderPpEditPage } from '../brandbuilder-pp-edit/brandbuilder-pp-edit.page';
@Component({
  selector: 'app-brandbuilder-twitter',
  templateUrl: './brandbuilder-twitter.page.html',
  styleUrls: ['./brandbuilder-twitter.page.scss'],
})
export class BrandbuilderTwitterPage implements OnInit {
hideMe3:any;
hideMe2:any;
 profiletab: string = "all";
  constructor(public modalController: ModalController) { } 

  ngOnInit() {
  }
async presentModal() {
    const modal = await this.modalController.create({
      component: BrandbuilderCoverEditPage,
      cssClass: 'my-adddetail-modal'
    });
    return await modal.present();
  }
  async presentModal2() {
    const modal = await this.modalController.create({
      component: BrandbuilderPpEditPage,
      cssClass: 'my-adddetail-modal'
    });
    return await modal.present();  
  }
   hide3() {
	 this.hideMe3 = !this.hideMe3;
	}
	 hide2() {
	 this.hideMe2 = !this.hideMe2;
	}
}
