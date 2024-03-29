import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-a-shelve',
  templateUrl: './add-a-shelve.page.html',
  styleUrls: ['./add-a-shelve.page.scss'],
})
export class AddAShelvePage implements OnInit {

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
