import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editaplaylist-settings',
  templateUrl: './editaplaylist-settings.page.html',
  styleUrls: ['./editaplaylist-settings.page.scss'],
})
export class EditaplaylistSettingsPage implements OnInit {
type: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
	this.type = 'Settings';
  }
  dismiss() {
		// using the injected ModalController this page
		// can "dismiss" itself and optionally pass back data
		this.modalController.dismiss({
		  'dismissed': true
		});
	}
}
