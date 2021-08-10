import { Component, OnInit } from '@angular/core';
import { ReturnPopupPage } from '../return-popup/return-popup.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-create-a-tweet-write',
  templateUrl: './create-a-tweet-write.page.html',
  styleUrls: ['./create-a-tweet-write.page.scss'],
})
export class CreateATweetWritePage implements OnInit {
hideMe=false;	
hide() {
this.hideMe = !this.hideMe;
}
hideMe1=false;	
hide1() {
this.hideMe1 = !this.hideMe1;
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
