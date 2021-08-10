import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { INTRO_KEY } from "src/app/guards/intro.guard";
import { Router } from "@angular/router";
import { Storage } from "@capacitor/storage";
import { TwitterConnect } from "@ionic-native/twitter-connect/ngx";
import firebase from "firebase";
import { AuthService } from "../services/auth.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
declare var gapi: any;
@Component({
	selector: "app-add-account",
	templateUrl: "./add-account.page.html",
	styleUrls: [ "./add-account.page.scss" ]
})
export class AddAccountPage implements OnInit {
	hideMe1: any;
	userProfile: any = null;
	twitterAccounts: any[] = [];
	youtubeChennales: any[] = [];
	public youtubechannelsarr: any = [];
	username: any = "";

	hide1() {
		this.hideMe1 = !this.hideMe1;
	}
	constructor(
		private router: Router,
		private twitter: TwitterConnect,
		public authService: AuthService,
		public cdr: ChangeDetectorRef
	) {}

	ngOnInit() {
		gapi.load("client:auth2", function() {
			gapi.auth2.init({ client_id: "811521026604-5tuqc85gcjh3jiv7h4t8t1o2u3v8pg0f.apps.googleusercontent.com" });
		});
		this._getYTChannelsList();
		this._getTWAccountsList();
		this.username = JSON.parse(localStorage.getItem("user")).displayName;
	}

	async _getYTChannelsList() {
		try {
			this.authService._getChannel().subscribe((res) => {
				console.log(res);
				if (res.data != null && res.data.channels.length > 0) {
					this.youtubechannelsarr = res.data.channels;
					this.cdr.detectChanges();
				} else {
					this.youtubechannelsarr = [];
				}
			});
		} catch (e) {
			console.log(e);
		}
	}

	async _getTWAccountsList() {
		try {
			this.authService._getChannelTW().subscribe((res) => {
				console.log(res);
				if (res.data != null && res.data.accounts.length > 0) {
					this.twitterAccounts = res.data.accounts;
					this.cdr.detectChanges();
				} else {
					this.twitterAccounts = [];
				}
			});
		} catch (e) {
			console.log(e);
		}
	}

	async start() {
		await Storage.set({ key: INTRO_KEY, value: "true" });

		this.router.navigateByUrl("/signup-createbrands", { replaceUrl: true });
	}

	async deleteTwitter_account(account) {
		try {
			this.authService._delChannelTW(account.uid).subscribe((res) => {
				console.log(res);
				this._getTWAccountsList();
				this.authService.presentToast("Deleted Successfully!", "success");
			});
		} catch (e) {
			this.authService.presentToast("Unable to delete! Please try again..", "danger");
		}
	}

	_twitterLogin() {
		this.authService.TwitterAuth().then((res) => {
			console.log(res[0]);
			this.authService._saveChannelTW(res[0]).subscribe((res) => {
				console.log(res);
				this._getTWAccountsList();
			});
		});
	}

	_googleLogin() {
		var self = this;
		return gapi.auth2.getAuthInstance().signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" }).then(
			function() {
				console.log("Sign-in successful");
				gapi.client.setApiKey("AIzaSyD231ggFTFJK5adibaotI3oxqR1D9Y2D3g");
				return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(
					function() {
						console.log("GAPI client loaded for API");
						return gapi.client.youtube.channels
							.list({
								mine: true
							})
							.then(
								function(response) {
									// Handle the results here (response.result has the parsed body).
									console.log("Response", response.result.items);
									var channels: any = [];
									channels = response.result.items;

									if (channels.length > 0) {
										channels.forEach((channel, index) => {
											console.log(channel);
											fetch(
												`https://www.googleapis.com/youtube/v3/channels?id=${channel.id}&key=AIzaSyD231ggFTFJK5adibaotI3oxqR1D9Y2D3g&part=snippet,contentDetails,statistics`
											)
												.then((response) => response.json())
												.then((json) => {
													self.authService._saveChannel(json.items[0]).subscribe((res) => {
														console.log(res);

														if (res.msg == "Already Added!") {
															self.authService.presentToast(
																"Channel already added under channel list!",
																"danger"
															);
														} else {
															self._getYTChannelsList();
														}
													});
													// self.youtubechannelsarr.push(json.items[0]);
												});
										});
									} else {
										self.authService.presentToast("No Channels Found", "danger");
									}
								},
								function(err) {
									console.error("Execute error", err);
								}
							);
					},
					function(err) {
						console.error("Error loading GAPI client for API", err);
					}
				);
			},
			function(err) {
				console.error("Error signing in", err);
			}
		);
	}

	async _deleteChannel(id) {
		console.log(id);
		try {
			this.authService._delChannel(id).subscribe((res) => {
				console.log(res);
				this._getYTChannelsList();
				this.authService.presentToast("Deleted Successfully!", "success");
			});
		} catch (e) {
			this.authService.presentToast("Unable to delete! Please try again..", "danger");
		}
	}
}
