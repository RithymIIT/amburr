import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HelperService } from "../helper";
import { AlertController, Platform, ActionSheetController, } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EditYoutubeGoalsPage } from '../edit-youtube-goals/edit-youtube-goals.page';
import { EditTwitterGoalsPage } from '../edit-twitter-goals/edit-twitter-goals.page';
@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.page.html',
  styleUrls: ['./add-goals.page.scss'],
})
export class AddGoalsPage implements OnInit {
hideMe:any;
hideMe2:any;
twitterGoals: any[] = [];
youtubeGoals: any[] = [];
isSubmit = false;
cardData: any[] = [];
accType= ['Account One', 'Account Two', 'Account Three'];
count= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
time= ['Days', 'Week', 'Months'];
profileForm: FormGroup;
youtubeForm: FormGroup;
twitterForm: FormGroup;
  constructor(private helperService: HelperService, public modalController: ModalController, public alertController: AlertController, public authService: AuthService, private fb: FormBuilder, private plt: Platform,
	public actionSheetController: ActionSheetController,) {
    this.youtube_goals();
	this.twitter_goals();
	this.createYoutubeForm();
	this.createTwitterForm();
   }

  ngOnInit() {
  }

  async presentModal(goal) {
	const modal = await this.modalController.create({
	  component: EditYoutubeGoalsPage,
	  cssClass: 'EditYoutubeGoals',
	  componentProps: {
        goal: goal
      }
	});
	modal.onDidDismiss()
	   .then((data) => {
		 const user = data['data']; // Here's your selected user!
		 console.log('on dismiss show map page');
		   this.youtube_goals();
		   });
		   return await modal.present();
		 }


		 async presentModal2(goal) {
			const modal = await this.modalController.create({
			  component: EditTwitterGoalsPage,
			  cssClass: 'EditTwitterGoals',
			  componentProps: {
				goal: goal
			  }
			});
			modal.onDidDismiss()
			   .then((data) => {
				 const user = data['data']; // Here's your selected user!
				 console.log('on dismiss show map page');
				   this.twitter_goals();
				   });
				  
				   return await modal.present();
				 }
hide() {
	 this.hideMe = !this.hideMe;
	}
	hide2() {
	 this.hideMe2 = !this.hideMe2;
	}

  //YOTUBE GOALS FORM
	createYoutubeForm(){
		this.youtubeForm = this.fb.group({
			subscriber: ["", [Validators.required, Validators.pattern('[0-9]+$')]],
			accountType: ["", [Validators.required]],
			with: ["", [Validators.required]],
			within: ["", [Validators.required]],
			
		});
		
	}

	addYoutubeGoal(value: any) {
		console.log('FORM',this.youtubeForm);
		this.isSubmit = true;
		if(this.youtubeForm.invalid){
			console.log('not valid');
			return;
		}
		else {
			
			console.log('youtube goal ', this.youtubeForm.value);
			let goal = {
				subscribers: this.youtubeForm.value.subscriber,
				accountType: this.youtubeForm.value.accountType,
				with: this.youtubeForm.value.with,
				within: this.youtubeForm.value.within
			};
			console.log('goall', goal);
			this.youtubeGoals = this.youtubeGoals||[];
			this.youtubeGoals.push(goal);
			let json = JSON.stringify(this.youtubeGoals);
			localStorage.removeItem('cards');
			localStorage.setItem('ygoals',json);
      this.authService.presentLoading();
      this.youtube_goals();
	  this.youtubeForm.reset();
	  this.isSubmit = false;
	  this.hide();

	}
}
get f(){
		  
	return this.youtubeForm.controls;
}
youtube_goals(){
	console.log('all youtube goals', localStorage.getItem('ygoals'));
		
	this.youtubeGoals = JSON.parse(localStorage.getItem('ygoals'));
	console.log('cardddd', this.youtubeGoals);
  this.authService.stopLoading();
}


//TWITTER GOAL FORMS
createTwitterForm(){
	this.twitterForm = this.fb.group({
		subscriber: ["", [Validators.required, Validators.pattern('[0-9]+$')]],
		accountType: ["", [Validators.required]],
		with: ["", [Validators.required]],
		within: ["", [Validators.required]],
		
	});
	
}

addTwitterGoal(value: any) {
	console.log('FORM',this.youtubeForm);
	this.isSubmit = true;
	if(this.twitterForm.invalid){
		console.log('not valid');
		return;
	}
	else {
		
		console.log('twitter goal ', this.twitterForm.value);
		let goal = {
			subscribers: this.twitterForm.value.subscriber,
			accountType: this.twitterForm.value.accountType,
			with: this.twitterForm.value.with,
			within: this.twitterForm.value.within
		};
		console.log('goall', goal);
		this.twitterGoals = this.twitterGoals||[]
		this.twitterGoals.push(goal);
			let json = JSON.stringify(this.twitterGoals);
			localStorage.removeItem('cards');
			localStorage.setItem('tgoals',json);
      this.authService.presentLoading();
      this.twitter_goals();
	  this.twitterForm.reset();
	  this.isSubmit = false;
	  this.hide2();
}
}
get fo(){
	  
return this.twitterForm.controls;
}
twitter_goals(){
	console.log('all twitter goals', localStorage.getItem('tgoals'));
		
	this.twitterGoals = JSON.parse(localStorage.getItem('tgoals'));
	console.log('tweet goals', this.twitterGoals);
  this.authService.stopLoading();
  
}

async show_delete(goal) {
	//console.log('length of img array', this.imgURL.length);

	let actionSheet = await this.actionSheetController.create({
		header: 'Goals',
		cssClass: 'my-custom-class',
		buttons: [{
			text: 'Edit',
			role: 'destructive',
			icon: 'create',
			handler: () => {
				console.log('edit Clicked', goal);
				this.presentModal(goal);

			}
		},{
			text: 'Delete',
			role: 'destructive',
			icon: 'trash',
			handler: () => {
				console.log('Delete clicked', goal);
				(this.youtubeGoals).splice(goal, 1);
				
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
			text: 'Edit',
			role: 'destructive',
			icon: 'create',
			handler: () => {
				console.log('edit Clicked for twitter', goal);
				this.presentModal2(goal);

			}
		},{
			text: 'Delete',
			role: 'destructive',
			icon: 'trash',
			handler: () => {
				console.log('Delete clicked', goal);
				(this.twitterGoals).splice(goal, 1);
				
			}
		}
		]
	});
	actionSheet.present();
}
save_click(){
	let json = JSON.stringify(this.youtubeGoals);
				localStorage.removeItem('ygoals');
				localStorage.setItem('ygoals', json);	
				this.youtube_goals();


	let ajson = JSON.stringify(this.twitterGoals);
				localStorage.removeItem('tgoals');
				localStorage.setItem('tgoals', ajson);
				this.twitter_goals();
				this.authService.presentLoading();
				this.authService.presentToast('Goals Saved successfully.', 'success');
                this.authService.stopLoading();
			}
}
