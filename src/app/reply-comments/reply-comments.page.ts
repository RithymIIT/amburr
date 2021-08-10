import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply-comments',
  templateUrl: './reply-comments.page.html',
  styleUrls: ['./reply-comments.page.scss'],
})
export class ReplyCommentsPage implements OnInit {
 hideMe:any;
hideMe1=false;	
hide1() {
this.hideMe1 = !this.hideMe1;
} 
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
}
