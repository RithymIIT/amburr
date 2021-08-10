import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-b-buycaptions-cardadded',
  templateUrl: './b-buycaptions-cardadded.page.html',
  styleUrls: ['./b-buycaptions-cardadded.page.scss'],
})
export class BBuycaptionsCardaddedPage implements OnInit {
hideMe=false;	
hide() {
this.hideMe = !this.hideMe;
}
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
}
}
