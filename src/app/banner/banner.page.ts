import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { environment } from '../../environments/environment';
import  { Banner }  from '../services/models';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {
  @Input() banner: Banner;	
  showAd = environment.adsense.show;
  constructor() { this.banner = new Banner(
    'ca-app-pub-2060798330303598',
    1602523720,
    'auto',
    true
    )}
    ngAfterViewInit() {
      setTimeout(() => {
          try {
              (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
                  overlays: {bottom: true}
              });
          } catch (e) {
              console.error(e);
          }
      }, 0);
  }
  ngOnInit() {
  }

}
