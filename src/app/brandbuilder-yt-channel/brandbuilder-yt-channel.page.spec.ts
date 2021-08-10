import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandbuilderYTChannelPage } from './brandbuilder-yt-channel.page';

describe('BrandbuilderYTChannelPage', () => {
  let component: BrandbuilderYTChannelPage;
  let fixture: ComponentFixture<BrandbuilderYTChannelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandbuilderYTChannelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandbuilderYTChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
