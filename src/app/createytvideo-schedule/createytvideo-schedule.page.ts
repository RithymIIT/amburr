import { Component, OnInit } from '@angular/core';
import { ReturnPopupPage } from '../return-popup/return-popup.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-createytvideo-schedule',
  templateUrl: './createytvideo-schedule.page.html',
  styleUrls: ['./createytvideo-schedule.page.scss'],
})
export class CreateytvideoSchedulePage implements OnInit {
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
