import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: [ "./home.page.scss" ]
})
export class HomePage implements OnInit {
	hideMe: any;
	smtype: any = "yt";
	constructor() {}

	ngOnInit() {}
	hide() {
		this.hideMe = !this.hideMe;
	}
	changesmtype(type) {
		this.smtype = type;
	}
}
