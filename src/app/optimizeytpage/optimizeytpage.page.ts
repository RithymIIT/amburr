import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optimizeytpage',
  templateUrl: './optimizeytpage.page.html',
  styleUrls: ['./optimizeytpage.page.scss'],
})
export class OptimizeytpagePage implements OnInit {
type: string;
hideMe=false;	
hide() {
this.hideMe = !this.hideMe;
}
  constructor() { }

  ngOnInit() {
	  this.type = 'Channel';
  }

}
