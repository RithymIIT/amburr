import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-brandbuilder-cover-edit',
  templateUrl: './brandbuilder-cover-edit.page.html',
  styleUrls: ['./brandbuilder-cover-edit.page.scss'],
})
export class BrandbuilderCoverEditPage implements OnInit {

   constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
