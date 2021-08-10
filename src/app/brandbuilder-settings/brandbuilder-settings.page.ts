import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandbuilder-settings',
  templateUrl: './brandbuilder-settings.page.html',
  styleUrls: ['./brandbuilder-settings.page.scss'],
})
export class BrandbuilderSettingsPage implements OnInit {
hideMe:any;
hide() 
{
	this.hideMe = !this.hideMe;
}
  constructor() { }

  ngOnInit() {
  }

}
