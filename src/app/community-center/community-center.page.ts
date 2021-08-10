import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-center',
  templateUrl: './community-center.page.html',
  styleUrls: ['./community-center.page.scss'],
})
export class CommunityCenterPage implements OnInit {
 hideMe:any;
 hideMe2:any;
 hideMe3:any;
 hideMe4:any;
 hideMe5:any;
  constructor() { }

  ngOnInit() {
  }
 hide(val){
	if(val == this.hideMe){
	this.hideMe = 0;
	}
	else{
	this.hideMe = val;
	}
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
	hide5() {
	 this.hideMe5 = !this.hideMe5;
	} 
}
