import { Component, OnInit } from '@angular/core';
import { ReturnPopupPage } from '../return-popup/return-popup.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-crosspromotion-choose-video',
  templateUrl: './crosspromotion-choose-video.page.html',
  styleUrls: ['./crosspromotion-choose-video.page.scss'],
})
export class CrosspromotionChooseVideoPage implements OnInit {
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
	    slidesPerView: 2.9,
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
