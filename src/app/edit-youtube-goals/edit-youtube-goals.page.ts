import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from "../helper";
import { AlertController, Platform, ActionSheetController, } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-edit-youtube-goals',
  templateUrl: './edit-youtube-goals.page.html',
  styleUrls: ['./edit-youtube-goals.page.scss'],
})
export class EditYoutubeGoalsPage implements OnInit {
//@Input() goal: any;
public goal = this.navParams.get('goal');
accType= ['Account One', 'Account Two', 'Account Three'];
count= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
time= ['Days', 'Week', 'Months'];
mdata;
//goal;
isSubmit= false;
youtubeGoals: any[] = [];
youtubeForm: FormGroup;
  constructor(private helperService: HelperService,private navParams: NavParams, public alertController: AlertController, public authService: AuthService, private fb: FormBuilder, private plt: Platform,
    public actionSheetController: ActionSheetController, public modalController: ModalController) {
      this.createYoutubeForm();
      this.youtube_goals();
      
	  
    }


  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  createYoutubeForm(){
		this.youtubeForm = this.fb.group({
			subscriber: ["", [Validators.required, Validators.pattern('[0-9]+$')]],
			accountType: ["", [Validators.required]],
			with: ["", [Validators.required]],
			within: ["", [Validators.required]],
			
		});
		
	}

	addYoutubeGoal(value: any, g) {
		console.log('FORM',this.youtubeForm);
		this.isSubmit = true;
		if(this.youtubeForm.invalid){
			console.log('not valid');
			return;
		}
		else {
			
			console.log('youtube goal ',g, this.youtubeForm.value);
			let goal = {
				subscribers: this.youtubeForm.value.subscriber,
				accountType: this.youtubeForm.value.accountType,
				with: this.youtubeForm.value.with,
        within: this.youtubeForm.value.within
			};
			console.log('goall', goal);
			this.youtubeGoals = this.youtubeGoals||[];
      //this.youtubeGoals.splice(this.youtubeGoals.indexOf(g), 1, goal);
			this.youtubeGoals[g] = goal;
      //this.youtubeGoals.push(goal);
			let json = JSON.stringify(this.youtubeGoals);
			localStorage.removeItem('cards');
			localStorage.setItem('ygoals',json);
     // this.authService.presentLoading();
      
	  this.youtubeForm.reset();
	  this.isSubmit = false;
    this.modalController.dismiss({
      'dismissed': true
    });
	 // this.hide3();

	}
}
get f(){
		  
	return this.youtubeForm.controls;
}
youtube_goals(){
  //this.mdata = modalData.

	console.log('all youtube goals', this.goal);
  
		
	this.youtubeGoals = JSON.parse(localStorage.getItem('ygoals'));
	console.log('cardddd', this.youtubeGoals);
  this.edit(this.goal);
  //this.authService.stopLoading();
}

edit(goal){
  console.log('goal value', goal, this.youtubeGoals);
	this.youtubeForm.patchValue({
		    subscriber: this.youtubeGoals[goal].subscribers,
				accountType: this.youtubeGoals[goal].accountType,
				with: this.youtubeGoals[goal].with,
				within: this.youtubeGoals[goal].within
	});
	console.log("EDITED GOAL", this.youtubeGoals[goal]);
	

}

}
