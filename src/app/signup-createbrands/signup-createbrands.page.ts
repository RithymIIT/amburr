import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { DragulaService } from "ng2-dragula";
@Component({
	selector: "app-signup-createbrands",
	templateUrl: "./signup-createbrands.page.html",
	styleUrls: [ "./signup-createbrands.page.scss" ]
})
export class SignupCreatebrandsPage implements OnInit {
	hideMe: any;
	hideMe1: any;
	public youtubechannelsarr: any = [];
	public twitterAccounts: any = [];
	brandsList: any = [];
	brandProfiles: any = [];
	profilesArr: any = [];

	constructor(public authService: AuthService, private dragulaService: DragulaService) {
		this.dragulaService.createGroup("BRANDS", {
			accepts: (el, target, source, sibling) => {
				// To avoid dragging from right to left container

				return target.id !== "left";
			}
		});

		this.dragulaService.dropModel("BRANDS").subscribe(async (args) => {
			this.authService.presentLoading();
			if (args.source.id != "" && args.target.id != "") {
				console.log("Both Not Empty");
				console.log(args);

				await this.authService.editProfiles(args.source.id, args.sourceModel).subscribe(async (res) => {
					await this._getBrands();
					await this.authService.stopLoading();
				});

				await this.authService.editProfiles(args.target.id, args.targetModel).subscribe(async (res) => {
					await this._getBrands();
					await this.authService.stopLoading();
				});
			} else if (args.target.id != "") {
				this.authService.editProfiles(args.target.id, args.targetModel).subscribe(async (res) => {
					await this._getYTChannelsList();
					await this.authService.stopLoading();
				});
			} else if (args.target.id == "") {
				this.youtubechannelsarr = [];
				this.twitterAccounts = [];
				args.targetModel.forEach((element, index) => {
					if (element.type == "yt") {
						this.youtubechannelsarr.push(element);
						this.profilesArr = [];
						this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
						setTimeout(() => {
							this._popProfilesFromBrands();
						}, 2000);
					} else if (element.type == "tw") {
						this.twitterAccounts.push(element);
						this.profilesArr = [];
						this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
						setTimeout(() => {
							this._popProfilesFromBrands();
						}, 2000);
					}
				});
			}
		});
	}

	ngOnInit() {
		this._getYTChannelsList();
	}

	async _popProfilesFromBrands() {
		this.brandsList.forEach((elm, index) => {
			if (elm.profiles.length > 0) {
				this.authService.editProfiles(elm._id, elm.profiles).subscribe((res) => {});
			} else {
				elm.profiles = [];
				this.authService.editProfiles(elm._id, elm.profiles).subscribe((res) => {});
			}
		});
	}

	async _getYTChannelsList() {
		try {
			await this.authService._getChannel().subscribe((res) => {
				if (res.data.channels.length > 0) {
					this.youtubechannelsarr = res.data.channels;
					this.youtubechannelsarr.forEach((elm) => {
						elm.type = "yt";
					});
					this._getTWAccountsList();
				} else {
					this.youtubechannelsarr = [];
					this._getTWAccountsList();
				}
			});
		} catch (e) {
			await this._getTWAccountsList();
		}
	}

	async _getTWAccountsList() {
		try {
			this.authService._getChannelTW().subscribe((res) => {
				if (res.data != null && res.data.accounts.length > 0) {
					this.twitterAccounts = res.data.accounts;
					console.log(this.twitterAccounts);
					this.twitterAccounts.forEach((elm) => {
						elm.type = "tw";
					});
					this._getBrands();
				} else {
					this.twitterAccounts = [];
					this._getBrands();
				}
			});
		} catch (e) {
			this._getBrands();
		}
	}

	async _getBrands() {
		try {
			this.authService._getBrands().subscribe((res) => {
				if (res.data.length > 0) {
					this.brandsList = res.data;
					this.brandsList.forEach((elm, index) => {
						if (elm.profiles.length > 0) {
							elm.profiles.forEach((elm2, index2) => {
								if (elm2.type == "yt") {
									let filtered = this.youtubechannelsarr.filter((arr) => arr.id === elm2.id);
									if (filtered.length > 0 && this.youtubechannelsarr.length > 0) {
										this.youtubechannelsarr.forEach((deleteelm, ind) => {
											if (filtered[0].id == deleteelm.id) {
												this.youtubechannelsarr.splice(ind, 1);
												this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
											}
										});
									} else {
										this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
									}
								} else if (elm2.type == "tw") {
									let filtered2 = this.twitterAccounts.filter((arr) => arr.uid === elm2.uid);
									if (filtered2.length > 0 && this.twitterAccounts.length > 0) {
										this.twitterAccounts.forEach((deleteelm, ind) => {
											if (filtered2[0].id == deleteelm.id) {
												this.twitterAccounts.splice(ind, 1);
												this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
											}
										});
									} else {
										this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
									}
								}
							});
						} else {
							this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
						}
					});
				} else {
					console.log(this.youtubechannelsarr);
					console.log(this.twitterAccounts);
					this.profilesArr = this.youtubechannelsarr.concat(this.twitterAccounts);
					this.brandsList = [];
				}
			});
		} catch (e) {
			this.brandsList = [];
		}
	}

	async _createBrand() {
		this.authService._createBrand().subscribe((res) => {
			this._getBrands();
		});
	}

	_delBrand(id) {
		this.authService.presentLoading();
		this.authService._deleteBrands(id).subscribe(async (res) => {
			await this._getYTChannelsList();
			await this.authService.stopLoading();
		});
	}

	async _editBrand(id, e) {
		try {
			this.authService.editBrand(id, e.target.value).subscribe((res) => {
				this._getBrands();
			});
		} catch (e) {}
	}

	hide() {
		this.hideMe = !this.hideMe;
	}
	hide1() {
		this.hideMe1 = !this.hideMe1;
	}
}
