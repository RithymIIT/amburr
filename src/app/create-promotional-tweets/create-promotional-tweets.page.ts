import { Component, OnInit } from '@angular/core';
import { ReturnPopupPage } from '../return-popup/return-popup.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-create-promotional-tweets',
  templateUrl: './create-promotional-tweets.page.html',
  styleUrls: ['./create-promotional-tweets.page.scss'],
})
export class CreatePromotionalTweetsPage implements OnInit {
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
slideOpts:any = {
	    slidesPerView: 2.7,
	    loop: false,
	    spaceBetween: 0,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 0
			},			
			320: {
				slidesPerView: 1.7,
				spaceBetween: 0,
			}
		}	  
	} 
}
