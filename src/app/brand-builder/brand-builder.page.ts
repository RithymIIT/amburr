import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BrandbuilderCoverEditPage } from '../brandbuilder-cover-edit/brandbuilder-cover-edit.page';
import { BrandbuilderPpEditPage } from '../brandbuilder-pp-edit/brandbuilder-pp-edit.page';

@Component({
  selector: 'app-brand-builder',
  templateUrl: './brand-builder.page.html',
  styleUrls: ['./brand-builder.page.scss'],
})
export class BrandBuilderPage implements OnInit {
hideMe:any;
hideMe2:any;
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
  hide() {
	 this.hideMe = !this.hideMe;
	}
	 hide2() {
	 this.hideMe2 = !this.hideMe2;
	}
}
