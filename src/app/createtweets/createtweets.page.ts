import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtweets',
  templateUrl: './createtweets.page.html',
  styleUrls: ['./createtweets.page.scss'],
})
export class CreatetweetsPage implements OnInit {
hideMe=false;	
hide() {
this.hideMe = !this.hideMe;
}
  constructor() { }

  ngOnInit() {
  }

}
