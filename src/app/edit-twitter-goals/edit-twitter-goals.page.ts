import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from "../helper";
import { AlertController, Platform, ActionSheetController, } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-edit-twitter-goals',
  templateUrl: './edit-twitter-goals.page.html',
  styleUrls: ['./edit-twitter-goals.page.scss'],
})
export class EditTwitterGoalsPage implements OnInit {
  public goal = this.navParams.get('goal');
  accType= ['Account One', 'Account Two', 'Account Three'];
  count= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  time= ['Days', 'Week', 'Months'];
  mdata;
  //goal;
  isSubmit= false;
  twitterGoals: any[] = [];
  twitterForm: FormGroup;
  constructor(private helperService: HelperService,private navParams: NavParams, public alertController: AlertController, public authService: AuthService, private fb: FormBuilder, private plt: Platform,
    public actionSheetController: ActionSheetController, public modalController: ModalController) {
      this.createTwitterForm();
      this.twitter_goals();}

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
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

addTwitterGoal(value: any, g) {
	console.log('FORM',this.twitterForm);
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
		this.twitterGoals[g] = goal;
      //this.youtubeGoals.push(goal);
			let json = JSON.stringify(this.twitterGoals);
			localStorage.removeItem('cards');
			localStorage.setItem('tgoals',json);
     // this.authService.presentLoading();
      
	  this.twitterForm.reset();
	  this.isSubmit = false;
    this.modalController.dismiss({
      'dismissed': true
    });
	 
}
}
get fo(){
	  
return this.twitterForm.controls;
}
twitter_goals(){
	//this.authService.presentLoading();
	
	console.log('all twitter goals', localStorage.getItem('tgoals'));
	//this.authService.stopLoading();
	this.twitterGoals = JSON.parse(localStorage.getItem('tgoals'));
	console.log('tweet goals', this.twitterGoals);
  this.edit(this.goal);
 
  
}
edit(goal){
  console.log('goal value', goal, this.twitterGoals);
	this.twitterForm.patchValue({
		    subscriber: this.twitterGoals[goal].subscribers,
				accountType: this.twitterGoals[goal].accountType,
				with: this.twitterGoals[goal].with,
				within: this.twitterGoals[goal].within
	});
	console.log("EDITED GOAL", this.twitterGoals[goal]);
	

}
}
