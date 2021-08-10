import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-createbrands-filled',
  templateUrl: './signup-createbrands-filled.page.html',
  styleUrls: ['./signup-createbrands-filled.page.scss'],
})
export class SignupCreatebrandsFilledPage implements OnInit {
hideMe:any;
hide() 
{
	this.hideMe = !this.hideMe;
}
  constructor() { }

  ngOnInit() {
  }

}
