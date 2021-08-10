import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdatePasswordPage } from '../update-password/update-password.page';
import { AddPaymentMethodePage } from '../add-payment-methode/add-payment-methode.page';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, Platform, ActionSheetController, } from '@ionic/angular';
import { HelperService } from "../helper";
import {
	Capacitor,
} from '@capacitor/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

import { EditYoutubeGoalsPage } from '../edit-youtube-goals/edit-youtube-goals.page';
import { EditTwitterGoalsPage } from '../edit-twitter-goals/edit-twitter-goals.page';
@Component({
	selector: 'app-my-account',
	templateUrl: './my-account.page.html',
	styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
	type: string;
	hideMe: any;
	hideMe2: any;
	hideMe3: any;
	hideMe4: any;
	
	userdata: any = '';
	hiden = [];
	twitterGoals: any[] = [];
	youtubeGoals: any[] = [];
	isSubmit = false;
	cardData: any[] = [];
	deleted = false;
	newadded = false;
	imgData = [];
	accType = ['Account One', 'Account Two', 'Account Three'];
	count = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
	time = ['Days', 'Week', 'Months'];
	profileForm: FormGroup;
	youtubeForm: FormGroup;
	twitterForm: FormGroup;
	imgURL;
	selectedItem: any;

	//images: ApiImage[] = [];
	@ViewChild('fileInput', { static: false }) fileInput: ElementRef;
	constructor(public modalController: ModalController, private plt: Platform,
		public actionSheetController: ActionSheetController, private helperService: HelperService, public alertController: AlertController, public authService: AuthService, private fb: FormBuilder) {
		this.get_img();
		this.fetchUserData();
		this.createProfileForm();
		this.getAllCards();
		this.youtube_goals();
		this.twitter_goals();
		this.createYoutubeForm();
		this.createTwitterForm();
	}

	ngOnInit() {
		this.type = 'all';

	}
	async presentModal3(goal) {
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
	
	
			 async presentModal4(goal) {
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
	
	async editprofile() {
		this.hide();
		const buttons = [
			{
				text: 'Take Photo',
				icon: 'camera',
				handler: () => {
					this.addImage(CameraSource.Camera);
				},
			},
			{
				text: 'Choose From Photos Library',
				icon: 'image',
				handler: () => {
					this.addImage(CameraSource.Photos);
				},
			},
		];
		// Only allow file selection inside a browser
		if (!this.plt.is('hybrid')) {
			buttons.push({
				text: 'Choose a File',
				icon: 'attach',
				handler: () => {
					this.fileInput.nativeElement.click();
				},
			});
		}

		const actionSheet = await this.actionSheetController.create({
			header: 'Select Image Source',
			buttons,
		});
		await actionSheet.present();
	}
	async addImage(source: CameraSource) {
		const image = await Camera.getPhoto({
			quality: 60,
			allowEditing: true,
			resultType: CameraResultType.Base64,
			source,
		});
		const file = this.b64toBlob(image.base64String, `image/${image.format}`);

		const reader = new FileReader();
		// this.updateForm.get('pic').setValue(file);

		const id = localStorage.getItem('uid');
		const formData = new FormData();

		formData.append('uid', id);
		formData.append('image', file);
		console.log(formData);
		// this.apiService.changepic(formData).subscribe((res) => {
		//   console.log(res);
		// });

		reader.onprogress = (e) => {
			console.log(e);
		};

		reader.onload = (e) => {
			// both works
			localStorage.removeItem('imgda');
			console.log('ALL IMAGE DATA', localStorage.getItem('imgda'));
			this.imgURL = reader.result;
			let picdata = {
				uid: localStorage.getItem('uid'),
				img: reader.result,
			};
			this.imgData = [];
			this.imgData.push(picdata);
			
			
			let json = JSON.stringify(this.imgData);
			localStorage.setItem('imgda', json);
			//console.log('img', localStorage.getItem('imgda'));
			//this.get_img();
			// ERROR in src/app/profile/profile.page.ts(110,30): error TS2339: Property 'result' does not exist on type 'EventTarget'.
			// this.imgURL = e.target.result;
		};

		reader.readAsDataURL(file);
	}

	b64toBlob(b64Data, contentType = '', sliceSize = 512) {
		const byteCharacters = atob(b64Data);
		const byteArrays = [];

		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);

			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}

		const blob = new Blob(byteArrays, { type: contentType });
		return blob;
	}
	async takePhoto() {
		const options = {
			resultType: CameraResultType.Uri,
		};

		const originalPhoto = await Camera.getPhoto(options);
		const photoInTempStorage = await Filesystem.readFile({
			path: originalPhoto.path,
		});

		let date = new Date(),
			time = date.getTime(),
			fileName = time + '.jpeg';

		await Filesystem.writeFile({
			data: photoInTempStorage.data,
			path: fileName,
			directory: Directory.Data,
		});

		const finalPhotoUri = await Filesystem.getUri({
			directory: Directory.Data,
			path: fileName,
		});

		let photoPath = Capacitor.convertFileSrc(finalPhotoUri.uri);
		console.log(photoPath);
	}

	async deleteImage(img) {
		this.hide();
		const buttons = [
			{
				text: 'Delete Photo',
				icon: 'trash',
				handler: () => {
					console.log('Delete image');

					let picdata = {
						uid: localStorage.getItem('uid'),
						img: '',
					};
					this.imgURL = '';
					this.imgData = this.imgData || [];
					this.imgData.push(picdata);
					let json = JSON.stringify(this.imgData);
					localStorage.removeItem('imgda');

					this.get_img();

				},
			},
		]
		const actionSheet = await this.actionSheetController.create({
			header: 'Delete Image',
			buttons,
		});
		await actionSheet.present();
	}
	get_img() {

		this.imgData = JSON.parse(localStorage.getItem('imgda'));
		if (this.imgData !== null) {
			this.imgURL = this.imgData[0].img;

		}
	}
	make_primary(i) {
		for (let z in this.cardData) {
			if (this.cardData[z].number === i) {
				this.cardData[z].primary = true;
			}

			else {
				this.cardData[z].primary = false;
			}
		}
		let json = JSON.stringify(this.cardData);
		localStorage.removeItem('cards');
		localStorage.setItem('cards', json);
		//this.helperService.presentLoading();
		this.getAllCards();
		//this.helperService.stopLoading();

	}
	hide() {
		this.hideMe = !this.hideMe;
	}
	hide2() {
		this.hideMe2 = !this.hideMe2;
	}
	hide3() {
		this.hideMe3 = !this.hideMe3;
	}
	hide4() {
		this.hideMe4 = !this.hideMe4;
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: UpdatePasswordPage,
			cssClass: 'my-custom-class'
		});
		return await modal.present();
	}
	
	getAllCards() {
		//let json = JSON.stringify(data);
		console.log('all cards', localStorage.getItem('cards'));

		this.cardData = JSON.parse(localStorage.getItem('cards'));
		console.log('cardddd', this.cardData);


	}
	async presentModal2() {
		const modal = await this.modalController.create({
			component: AddPaymentMethodePage,
			cssClass: 'my-custom-class'
		});

		modal.onDidDismiss()
			.then((data) => {
				const user = data['data']; // Here's your selected user!
				console.log('on dismiss show map page', user);
				if (user.dismissed === true) {

					console.log('Dissmised page');
				}
				else {
					console.log('with data', user);
					let card = user.number;
					let ccNumber = card.toString();

					let lastFourDigits = ccNumber.substr(-4);
					console.log('last four digit', lastFourDigits);
					const u = {
						lastnumber: lastFourDigits,
						number: user.number,
						type: user.type,
						primary: false
					}
					console.log('card details', u);

					//this.helperService.presentLoading();

					this.cardData = this.cardData || [];
					this.cardData.push(u);
					let json = JSON.stringify(this.cardData);
					localStorage.setItem('cards', json);

					console.log('card details', json);

					//this.helperService.stopLoading();
					this.helperService.presentToast('Card Added Successfully', "light");
					console.log('card data', this.cardData);
					//this.f = true;
				}
			});

		return await modal.present();
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
					this.presentModal3(goal);
	
				}
			},{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => {
					console.log('Delete clicked', goal);
					(this.youtubeGoals).splice(goal, 1);
					let json = JSON.stringify(this.youtubeGoals);
					localStorage.removeItem('ygoals');
					localStorage.setItem('ygoals', json);
					this.deleted = true;
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
				text: 'Edit',
				role: 'destructive',
				icon: 'create',
				handler: () => {
					console.log('edit Clicked for twitter', goal);
					//this.editValues = goal;
					this.presentModal4(goal);
	
				}
			},{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => {
					console.log('Delete clicked', goal);
					(this.twitterGoals).splice(goal, 1);
					let json = JSON.stringify(this.twitterGoals);
					localStorage.removeItem('tgoals');
					localStorage.setItem('tgoals', json);
					this.deleted = true;
					this.twitter_goals();
				}
			}
			]
		});
		actionSheet.present();
	}

	async presentAlert(card) {

		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Delete Alert',
			message: 'Are You Sure You Want To Delete This Card',
			buttons: [{
				text: 'Cancel',
				role: 'cancel',
				cssClass: 'secondary',

				handler: (blah) => {
					console.log('Confirm Cancel: blah');

				}
			}, {
				text: 'Okay',
				handler: () => {

					console.log(card);
					this.remove(card);
					this.helperService.presentToast('Card Deleted Successfully', "light");

					//this.cardData.pop(index);
				}
			}
			]
		});

		await alert.present();

		const { role } = await alert.onDidDismiss();
		console.log('onDidDismiss resolved with role', role);
	}

	remove(card) {
		(this.cardData).splice(card, 1);
		let json = JSON.stringify(this.cardData);
		localStorage.removeItem('cards');
		localStorage.setItem('cards', json);
		this.getAllCards();
	};

	createProfileForm() {
		this.profileForm = this.fb.group({
			name: ["", [Validators.required]],
			email: ["", [Validators.required, Validators.email]]
		});
	}

	get form() {
		return this.profileForm.controls;
	}

	fetchUserData() {
		const data = {
			uid: localStorage.getItem('uid')
		}
		this.helperService.presentLoading();

		//this.authService.presentLoading();
		this.authService.fetchdata(data).then((snapshot) => {
			console.log(snapshot);
			this.helperService.stopLoading();
			if (snapshot.exists) {
				this.authService.presentToast('Data fetched successfully.', 'success');
				this.userdata = snapshot.val();
				this.profileForm.patchValue({
					name: this.userdata.displayName,
					email: this.userdata.email
				});
				console.log(this.userdata);
			}
			else {
				this.authService.presentToast('Empty data', 'success');
			}
		}).catch((e) => {
			this.helperService.stopLoading();
			this.authService.presentToast(e.message, 'danger');
		})
	}

	updateProfile(value: any): void {
		this.isSubmit = true;
		console.log(this.profileForm);
		if (this.profileForm.invalid) {
			return;
		}
		console.log('submitted');
		const data = {
			uid: localStorage.getItem('uid'),
			name: value.name,
			email: value.email
		};
		//this.authService.presentLoading();
		this.authService.updateProfile(data).then((res) => {
			this.isSubmit = false;
			//this.authService.stopLoading();
			console.log(res);
		}).catch(e => {
			this.isSubmit = false;
			//this.authService.stopLoading();
			console.log(e);
		})
	}


	//YOTUBE GOALS FORM
	createYoutubeForm() {
		this.youtubeForm = this.fb.group({
			subscriber: ["", [Validators.required, Validators.pattern('[0-9]+$')]],
			accountType: ["", [Validators.required]],
			with: ["", [Validators.required]],
			within: ["", [Validators.required]],

		});

	}

	addYoutubeGoal(value: any) {
		console.log('FORM', this.youtubeForm);
		this.isSubmit = true;
		if (this.youtubeForm.invalid) {
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
			this.youtubeGoals = this.youtubeGoals || [];
			this.youtubeGoals.push(goal);
			let json = JSON.stringify(this.youtubeGoals);
			localStorage.removeItem('ygoals');
			localStorage.setItem('ygoals', json);
			this.newadded = true;
			this.youtube_goals();
			this.youtubeForm.reset();
			this.isSubmit=false;

		}
	}
	get f() {

		return this.youtubeForm.controls;
	}
	youtube_goals() {
		if (this.deleted === true || this.newadded === true) {
			console.log('all youtube goals', localStorage.getItem('ygoals'));
			//this.helperService.presentLoading();	
			this.youtubeGoals = JSON.parse(localStorage.getItem('ygoals'));
			//this.helperService.stopLoading();
			console.log('cardddd', this.youtubeGoals);

		}
		else {
			console.log('all youtube goals', localStorage.getItem('ygoals'));
			this.youtubeGoals = JSON.parse(localStorage.getItem('ygoals'));
			console.log('cardddd', this.youtubeGoals);
		}
	}


	//TWITTER GOAL FORMS
	createTwitterForm() {
		this.twitterForm = this.fb.group({
			subscriber: ["", [Validators.required, Validators.pattern('[0-9]+$')]],
			accountType: ["", [Validators.required]],
			with: ["", [Validators.required]],
			within: ["", [Validators.required]],

		});

	}

	addTwitterGoal(value: any) {
		console.log('FORM', this.youtubeForm);
		this.isSubmit = true;
		if (this.twitterForm.invalid) {
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
			this.twitterGoals = this.twitterGoals || []
			this.twitterGoals.push(goal);
			let json = JSON.stringify(this.twitterGoals);
			localStorage.removeItem('tgoals');
			localStorage.setItem('tgoals', json);
			this.newadded = true;
			this.twitter_goals();
			this.twitterForm.reset();
			this.isSubmit=false;
		}
	}
	get fo() {

		return this.twitterForm.controls;
	}
	twitter_goals() {
		if (this.deleted === true || this.newadded === true) {
			console.log('all twitter goals', localStorage.getItem('tgoals'));
			//this.helperService.presentLoading();	
			this.twitterGoals = JSON.parse(localStorage.getItem('tgoals'));
			console.log('tweet goals', this.twitterGoals);
			//this.helperService.stopLoading();
		}
		else {
			console.log('all twitter goals', localStorage.getItem('tgoals'));
			this.twitterGoals = JSON.parse(localStorage.getItem('tgoals'));
			console.log('tweet goals', this.twitterGoals);
		}
	}
}
