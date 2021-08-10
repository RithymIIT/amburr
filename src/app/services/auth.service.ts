import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { AngularFireDatabase } from "@angular/fire/database";
import * as auth from "firebase/app";
import { map, tap, switchMap } from "rxjs/operators";
import { LoadingController, ToastController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, from, Observable, Subject } from "rxjs";
import { Storage } from "@capacitor/storage";
import { TwitterConnect } from "@ionic-native/twitter-connect/ngx";
import { Router } from "@angular/router";

import {
	BASE_URL,
	ADDCHANNEL,
	GETCHANNEL,
	DELETECHANNEL,
	ADDCHANNELTW,
	GETCHANNELTW,
	DELETECHANNELTW,
	ADDBRAND,
	GETBRAND,
	DELETEBRAND,
	EDITBRAND,
	EDITPROFILES
} from "../../util/constants";

const TOKEN_KEY = "my-token";
@Injectable({
	providedIn: "root"
})
export class AuthService {
	userdata: any;
	loading: any;
	isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
	token = "";
	location = "/add-account";
	apiKey = "AIzaSyCeY7qLToOICJrqDbOFJ4OuV7s8rFdj5UA";
	videos: any[];
	twitter_details: any[] = [];
	youtube_details: any[] = [];
	constructor(
		public afAuth: AngularFireAuth,
		private afDb: AngularFireDatabase,
		public toastController: ToastController,
		public loadingController: LoadingController,
		private http: HttpClient,
		private twitter: TwitterConnect,
		private router: Router
	) {
		this.loadToken();
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.userdata = user;
				localStorage.setItem("user", JSON.stringify(this.userdata));
				JSON.parse(localStorage.getItem("user"));
			} else {
				localStorage.setItem("user", null);
				JSON.parse(localStorage.getItem("user"));
				Storage.set({ key: TOKEN_KEY, value: "token" });
			}
		});
	}
	async loadToken() {
		console.log("in load token");
		const token = await Storage.get({ key: TOKEN_KEY });
		if (token && token.value) {
			console.log("set token: ", token.value);
			this.token = token.value;
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}

	async registerUser(data) {
		try {
			console.log(data);
			const newUser: firebase.auth.UserCredential = await this.afAuth.createUserWithEmailAndPassword(
				data.email,
				data.password
			);
			console.log("USER NRE", newUser);
			this.afDb
				.object(`users/${newUser.user.uid}`)
				.set({
					email: data.email,
					displayName: data.name,
					createdAt: Date.now()
				})
				.then(() => {
					console.log("Enter");
					newUser.user
						.sendEmailVerification()
						.then((res) => {
							console.log("MAIL SENT");
							console.log(res);
						})
						.catch((error) => {
							window.alert(error.message);
						});
				})
				.catch((error) => {
					window.alert(error.message);
				});

			return newUser;
		} catch (e) {
			throw e;
		}
	}

	// signInUser(data){

	//   return this.afAuth.signInWithEmailAndPassword(data.email, data.matchOldPassword);
	//}
	signInUser(data) {
		console.log("in sign in method");
		this.isAuthenticated.next(true);
		Storage.set({ key: TOKEN_KEY, value: "token" });
		return this.afAuth.signInWithEmailAndPassword(data.email, data.password);
	}
	logout(): Promise<void> {
		this.isAuthenticated.next(false);
		return Storage.remove({ key: TOKEN_KEY });
	}

	getYoutubeChannels(): Observable<any> {
		return this.http.get(
			"https://youtube.googleapis.com/youtube/v3/channels?key=AIzaSyDtpHa47tt-4fAJJ2b3iy7Lwrsj6dtabN4&managedByMe=true&maxResults=10"
		);

		//getVideosForChanel(channel, maxResults): Observable<Object> {
		// let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
		// return this.http.get(url)
		//   .pipe(map((res) => {
		//     return res;
		//   }))
		// }
	}

	forgotPassword(data) {
		return this.afAuth.sendPasswordResetEmail(data.email);
	}

	fetchdata(data) {
		// const userdata = firebase.database().ref();
		// return userdata.child('users').child(data.uid).get();

		return firebase.database().ref("/users/" + data.uid).once("value");
	}

	matchOldPassword(data) {
		return firebase
			.auth()
			.currentUser.reauthenticateWithCredential(
				firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email, data.old)
			);
	}

	changePassword(data) {
		return firebase.auth().currentUser.updatePassword(data.new);
	}

	updateProfile(data) {
		return this.afDb.object(`users/${data.uid}`).update({
			email: data.email,
			displayName: data.name
		});

		// const user = firebase.auth().currentUser;
		// const oldemail = user.email.toLowerCase();
		// const newemail = data.email.toLowerCase();
		// if(oldemail == newemail){
		//   console.log('same');
		//   return user.updateProfile({
		//     displayName: data.name,
		//   });
		// }else{
		//   console.log('different');
		//   user.updateEmail(data.email).then(() =>{
		//     return user.updateProfile({
		//       displayName: data.name,
		//     })
		//   }).catch(e =>{
		//     return e;
		//   })
		// }
	}
	// Sign in with Twitter

	TwitterAuth() {
		// var twitterProvider = new firebase.auth.TwitterAuthProvider(newCredentials);
		// twitterProvider;
		return this.AuthLogin(new firebase.auth.TwitterAuthProvider());
		//return this.AuthLogin(twitterProvider);
	}
	GoogleAuth() {
		var googleProvider = new firebase.auth.GoogleAuthProvider();
		return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
	}

	// Auth logic to run auth providers
	AuthLogin(provider) {
		return this.afAuth
			.signInWithPopup(provider)
			.then((result) => {
				if (result.additionalUserInfo.providerId === "twitter.com") {
					console.log("Twitter Credentials");
					this.twitter_details = this.twitter_details || [];
					this.twitter_details.push(result.user);
					console.log("Added twiiter accounts", this.twitter_details);
					let json = JSON.stringify(this.twitter_details);

					var credential = result.credential;
					var user = result.user;
					return this.twitter_details;
					// this.signOut(user);
				} else if (result.additionalUserInfo.providerId === "google.com") {
					console.log("google credentials");
					this.youtube_details = this.youtube_details || [];
					this.youtube_details.push(result.user);
					let json = JSON.stringify(this.youtube_details);
					localStorage.removeItem("youtubeChennels");
					localStorage.setItem("youtubeChennels", json);
				}

				console.log("You have been successfully logged in!", result);
				setTimeout(() => {}, 7000);

				// An error happened.

				// this.afAuth.signOut().then((res) => {
				//   console.log(res);
				// });
				//   this.afAuth.signOut()
				//   .then(function() {
				//     console.log('Signout successful!')
				//  }, function(error) {
				//     console.log('Signout failed!')
				//  });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	signOut(user) {
		this.afAuth
			.signOut()
			.then((res) => {
				console.log("signed out", res);
				return user;
			})
			.catch((error) => {
				console.log("signed out failed !", error);
			});
	}

	// sendVerificationEmail(){
	//   return this.afAuth.currentUser.sendEmailVerification()
	// }

	async presentToast(message, color) {
		const toast = await this.toastController.create({
			message,
			duration: 5000,
			position: "bottom",
			color,
			buttons: [
				{
					text: "Close",
					role: "cancel",
					handler: () => {
						console.log("Cancel clicked");
					}
				}
			]
		});
		await toast.present();
	}

	async presentLoading() {
		this.loading = await this.loadingController.create({
			spinner: "crescent",
			// duration: 5000,
			message: "Please wait...",
			translucent: true,
			cssClass: "custom-class custom-loading"
		});
		return await this.loading.present();
	}

	async stopLoading() {
		if (this.loading !== undefined) {
			await this.loading.dismiss();
		} else {
			const self = this;
			setTimeout(() => {
				self.stopLoading();
			}, 1000);
		}
	}

	// setUserData(user){
	//   const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
	//   const userdata: User = {
	//     uid: user.uid,
	//   }
	// }

	// 	_getYoutubeChannelsInfo(channelid): Observable<any> {
	// 		console.log(channelid);
	// 		fetch(
	// 			`https://www.googleapis.com/youtube/v3/channels?id=UCROnJy7NzhkfiFy6f_QVfNg&key=AIzaSyD231ggFTFJK5adibaotI3oxqR1D9Y2D3g&part=snippet,contentDetails,statistics`
	// 		)
	// 			.then((response) => response.json())
	// 			.then((json) => {
	// 				console.log(json);
	// 				return json;
	// 			});
	// 	}

	/*********************** YT CHANNELS********************** */

	_saveChannel(channel) {
		var data = {
			userid: localStorage.getItem("uid"),
			channels: channel
		};

		return this.http.post(`${BASE_URL}${ADDCHANNEL}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	_getChannel() {
		var data = {
			userid: localStorage.getItem("uid")
		};
		return this.http.post(`${BASE_URL}${GETCHANNEL}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	_delChannel(channelid) {
		var data = {
			userid: localStorage.getItem("uid"),
			channelid: channelid
		};
		return this.http.post(`${BASE_URL}${DELETECHANNEL}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	/*********************** TW ACCOUNTS********************** */

	_saveChannelTW(account) {
		var data = {
			userid: localStorage.getItem("uid"),
			accounts: account
		};
		console.log(data);

		return this.http.post(`${BASE_URL}${ADDCHANNELTW}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	_getChannelTW() {
		var data = {
			userid: localStorage.getItem("uid")
		};
		return this.http.post(`${BASE_URL}${GETCHANNELTW}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	_delChannelTW(accountid) {
		var data = {
			userid: localStorage.getItem("uid"),
			accountid: accountid
		};
		return this.http.post(`${BASE_URL}${DELETECHANNELTW}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	/*********************** BRANDS ********************** */

	_createBrand() {
		var data = {
			userid: localStorage.getItem("uid")
		};

		return this.http.post(`${BASE_URL}${ADDBRAND}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	_getBrands() {
		var data = {
			userid: localStorage.getItem("uid")
		};
		return this.http.post(`${BASE_URL}${GETBRAND}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	_deleteBrands(id) {
		var data = {
			id: id
		};
		return this.http.post(`${BASE_URL}${DELETEBRAND}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	editBrand(id, name) {
		var data = {
			id: id,
			name: name
		};
		return this.http.post(`${BASE_URL}${EDITBRAND}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}

	editProfiles(id, profilesarr) {
		var data = {
			id: id,
			profiles: profilesarr
		};

		console.log(data);
		return this.http.post(`${BASE_URL}${EDITPROFILES}`, data).pipe(
			map((responseData) => {
				return responseData;
			})
		);
	}
}
