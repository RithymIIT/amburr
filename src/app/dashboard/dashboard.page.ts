import { Component, OnInit } from '@angular/core';
import { AlertController, Platform, ActionSheetController, } from '@ionic/angular';
import { HelperService } from "../helper";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	type: string;
hideMe:any;
twitterGoals: any[] = [];
youtubeGoals: any[] = [];
imgData = [];
imgURL;
  constructor(public actionSheetController: ActionSheetController, private router: Router, private helperService: HelperService, public authService: AuthService) {
    this.get_img();
    this.youtube_goals();
    this.twitter_goals();
    this.fetchUserData();
  }

  ionViewWillEnter(){
    this.get_img();
    this.youtube_goals();
    this.twitter_goals();
  }

  ngOnInit() {
	  this.type = 'all';
  }
hide() {
	 this.hideMe = !this.hideMe;
	}


  
  twitter_goals(){
   
    console.log('all twitter goals', localStorage.getItem('tgoals'));
    //this.helperService.presentLoading();	
    this.twitterGoals = JSON.parse(localStorage.getItem('tgoals'));
    console.log('tweet goals', this.twitterGoals);
    //this.helperService.stopLoading();
  }
  get_img(){
		console.log('getting images');
    this.imgData = JSON.parse(localStorage.getItem('imgda'));
    if(this.imgData !== null){
    this.imgURL = this.imgData[0].img;
  
   }
    }

  youtube_goals(){
    
    console.log('all youtube goals', localStorage.getItem('ygoals'));
    //this.helperService.presentLoading();	
    this.youtubeGoals = JSON.parse(localStorage.getItem('ygoals'));
    //this.helperService.stopLoading();
    console.log('cardddd', this.youtubeGoals);
    
  }

  async show_delete(goal) {
    //console.log('length of img array', this.imgURL.length);
   
	let actionSheet = await this.actionSheetController.create({
		header: 'Goals',
		cssClass: 'my-custom-class',
		buttons: [{
		  text: 'Delete',
		  role: 'destructive',
		  icon: 'trash',
		  handler: () => {
			console.log('Delete clicked', goal);
			(this.youtubeGoals).splice(goal, 1);
	let json = JSON.stringify(this.youtubeGoals);
	localStorage.removeItem('ygoals');
	localStorage.setItem('ygoals',json);
	//this.deleted = true;
	this.youtube_goals();
		  }
		}
		]
	});
	actionSheet.present();
}

async show_tdelete(goal) {
    //console.log('length of img array', this.imgURL.length);
   
	let actionSheet = await this.actionSheetController.create({
		header: 'Goals',
		cssClass: 'my-custom-class',
		buttons: [{
		  text: 'Delete',
		  role: 'destructive',
		  icon: 'trash',
		  handler: () => {
			console.log('Delete clicked', goal);
			(this.twitterGoals).splice(goal, 1);
	let json = JSON.stringify(this.twitterGoals);
	localStorage.removeItem('tgoals');
	localStorage.setItem('tgoals',json);
	//this.deleted = true;
	this.twitter_goals();
		  }
		}
		]
	});
	actionSheet.present();
}

async logout() {
  await this.authService.logout();
  this.router.navigateByUrl('/', { replaceUrl: true });
}

userdata: any = '';
fetchUserData(){
  const data = {
    uid: localStorage.getItem('uid')
  }
  console.log('fetching user data');
  this.helperService.presentLoading();
   
  //this.authService.presentLoading();
  this.authService.fetchdata(data).then((snapshot) =>{
    console.log(snapshot);
    this.helperService.stopLoading();
    if(snapshot.exists){
      this.authService.presentToast('Data fetched successfully.', 'success');
      this.userdata = snapshot.val();
      console.log(this.userdata);
    }
    else{
      this.authService.presentToast('Empty data','success');
    }
    }).catch((e) =>{
    this.helperService.stopLoading();
    this.authService.presentToast(e.message, 'danger');
    })
}


}
