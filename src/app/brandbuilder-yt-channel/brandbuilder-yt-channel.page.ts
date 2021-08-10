import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BrandbuilderCoverEditPage } from '../brandbuilder-cover-edit/brandbuilder-cover-edit.page';
import { BrandbuilderPpEditPage } from '../brandbuilder-pp-edit/brandbuilder-pp-edit.page';
import { ChennelTrailerSettingsPage } from '../chennel-trailer-settings/chennel-trailer-settings.page';
import { FeaturedchannelsPage } from '../featuredchannels/featuredchannels.page';
import { AddAShelvePage } from '../add-a-shelve/add-a-shelve.page';
import { EditAShelvePage } from '../edit-a-shelve/edit-a-shelve.page';
import { EditaplaylistSettingsPage } from '../editaplaylist-settings/editaplaylist-settings.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-brandbuilder-yt-channel',
  templateUrl: './brandbuilder-yt-channel.page.html',
  styleUrls: ['./brandbuilder-yt-channel.page.scss'],
})
export class BrandbuilderYTChannelPage implements OnInit {
hideMe3:any;
hideMe2:any;
	hideMe:any;
 profiletab: string = "all";
   constructor(public modalController: ModalController, public authService: AuthService) { 
    this.authService.getYoutubeChannels().subscribe((res) =>{
      console.log(res);
    })
   } 

  ngOnInit() {
  }
async presentModal() {
    const modal = await this.modalController.create({
      component: BrandbuilderCoverEditPage,
      cssClass: 'my-adddetail-modal'
    });
    return await modal.present();
  }
  async presentModal2() {
    const modal = await this.modalController.create({
      component: BrandbuilderPpEditPage,
      cssClass: 'my-adddetail-modal'
    });
    return await modal.present();  
  }
  async presentModal3() {
    const modal = await this.modalController.create({
      component: ChennelTrailerSettingsPage,
      cssClass: 'chenner-trailer'
    });
    return await modal.present();  
  }
  async presentModal4() {
    const modal = await this.modalController.create({
      component: FeaturedchannelsPage,
      cssClass: 'chenner-trailer'
    });
    return await modal.present();  
  }
  async presentModal5() {
    const modal = await this.modalController.create({
      component: AddAShelvePage,
      cssClass: 'chenner-trailer'
    });
    return await modal.present();  
  }
  async presentModal6() {
    const modal = await this.modalController.create({
      component: EditAShelvePage,
      cssClass: 'chenner-selv'
    });
    return await modal.present();  
  }
  async presentModal7() {
    const modal = await this.modalController.create({
      component: EditaplaylistSettingsPage,
      cssClass: 'chenner-selv'
    });
    return await modal.present();  
  }
  hide() {
	 this.hideMe = !this.hideMe;
	}
	 hide3() {
	 this.hideMe3 = !this.hideMe3;
	}
	 hide2() {
	 this.hideMe2 = !this.hideMe2;
	}
}
