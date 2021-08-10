import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-goals-added',
  templateUrl: './signup-goals-added.page.html',
  styleUrls: ['./signup-goals-added.page.scss'],
})
export class SignupGoalsAddedPage implements OnInit {
hideMe=false;	
hide() {
this.hideMe = !this.hideMe;
}
  constructor() { }

  ngOnInit() {
  }

}
