import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-weekly',
  templateUrl: './calendar-weekly.page.html',
  styleUrls: ['./calendar-weekly.page.scss'],
})
export class CalendarWeeklyPage implements OnInit {
hideMe:any;
hideMe2:any;
hideMe3:any;
hideMe4:any;
hideMe5:any;
  constructor() { }

  ngOnInit() {
  }
hide() {
	 this.hideMe = !this.hideMe;
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
