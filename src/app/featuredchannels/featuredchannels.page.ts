import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeaturedchannelsSearchPage } from '../featuredchannels-search/featuredchannels-search.page';
@Component({
  selector: 'app-featuredchannels',
  templateUrl: './featuredchannels.page.html',
  styleUrls: ['./featuredchannels.page.scss'],
})
export class FeaturedchannelsPage implements OnInit {

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
  async presentModal() {
    const modal = await this.modalController.create({
      component: FeaturedchannelsSearchPage,
      cssClass: 'abuycaptions-sec'
    });
    return await modal.present();  
  }  
}
