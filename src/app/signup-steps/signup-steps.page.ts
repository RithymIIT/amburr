import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-steps',
  templateUrl: './signup-steps.page.html',
  styleUrls: ['./signup-steps.page.scss'],
})
export class SignupStepsPage implements OnInit {
hideMe:any;
    hide() {
	 this.hideMe = !this.hideMe;
	}
  constructor() { }

  ngOnInit() {
  }

}
