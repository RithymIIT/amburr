import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrossPromotionThumbnailPage } from './cross-promotion-thumbnail.page';

describe('CrossPromotionThumbnailPage', () => {
  let component: CrossPromotionThumbnailPage;
  let fixture: ComponentFixture<CrossPromotionThumbnailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossPromotionThumbnailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrossPromotionThumbnailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
