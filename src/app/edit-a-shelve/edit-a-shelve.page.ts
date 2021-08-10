import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-a-shelve',
  templateUrl: './edit-a-shelve.page.html',
  styleUrls: ['./edit-a-shelve.page.scss'],
})
export class EditAShelvePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
	slideOpts:any = {
	  slidesPerView: 3.7,
	  loop: false,
	  spaceBetween: 0,
	} 
	dismiss() {
		// using the injected ModalController this page
		// can "dismiss" itself and optionally pass back data
		this.modalController.dismiss({
		  'dismissed': true
		});
	}
}
