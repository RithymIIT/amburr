import { Component, OnInit } from '@angular/core';
import { ReturnPopupPage } from '../return-popup/return-popup.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-createatweet-schedule',
  templateUrl: './createatweet-schedule.page.html',
  styleUrls: ['./createatweet-schedule.page.scss'],
})
export class CreateatweetSchedulePage implements OnInit {
hideMe=false;	
hideMe1=false;	
hide() {
this.hideMe = !this.hideMe;
}
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
