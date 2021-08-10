import { Component, OnInit } from '@angular/core';
import { ReturnPopupPage } from '../return-popup/return-popup.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-createytvideo-confirm',
  templateUrl: './createytvideo-confirm.page.html',
  styleUrls: ['./createytvideo-confirm.page.scss'],
})
export class CreateytvideoConfirmPage implements OnInit {
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
}
