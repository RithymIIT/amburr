import { Component, OnInit } from '@angular/core';
import { BBuycaptionsCardaddedPage } from '../b-buycaptions-cardadded/b-buycaptions-cardadded.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-a-buycaptions',
  templateUrl: './a-buycaptions.page.html',
  styleUrls: ['./a-buycaptions.page.scss'],
})
export class ABuycaptionsPage implements OnInit {

  constructor(public modalCtrl: ModalController , public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
}
  async presentModal() {
    const modal = await this.modalController.create({
      component: BBuycaptionsCardaddedPage,
      cssClass: 'abuycaptions-sec'
    });
    return await modal.present();
  }
}
