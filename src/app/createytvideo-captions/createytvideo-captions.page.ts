import { Component, OnInit } from '@angular/core';
import { ReturnPopupPage } from '../return-popup/return-popup.page';
import { ABuycaptionsPage } from '../a-buycaptions/a-buycaptions.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-createytvideo-captions',
  templateUrl: './createytvideo-captions.page.html',
  styleUrls: ['./createytvideo-captions.page.scss'],
})
export class CreateytvideoCaptionsPage implements OnInit {
hideMe=false;	
hide() {
this.hideMe = !this.hideMe;
}
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ReturnPopupPage,
      cssClass: 'returnpopup-sec'
    });
    return await modal.present();
  }
  async presentModal1() {
    const modal = await this.modalController.create({
      component: ABuycaptionsPage,
      cssClass: 'abuycaptions-sec'
    });
    return await modal.present();
  }
}
