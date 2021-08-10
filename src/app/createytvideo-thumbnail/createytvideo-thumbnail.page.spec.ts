import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateytvideoThumbnailPage } from './createytvideo-thumbnail.page';

describe('CreateytvideoThumbnailPage', () => {
  let component: CreateytvideoThumbnailPage;
  let fixture: ComponentFixture<CreateytvideoThumbnailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateytvideoThumbnailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateytvideoThumbnailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
