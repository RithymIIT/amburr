import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-brandbuilder-pp-edit',
  templateUrl: './brandbuilder-pp-edit.page.html',
  styleUrls: ['./brandbuilder-pp-edit.page.scss'],
})
export class BrandbuilderPpEditPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
dismiss2() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
