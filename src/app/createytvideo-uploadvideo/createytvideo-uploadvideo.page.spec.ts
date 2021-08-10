import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateytvideoUploadvideoPage } from './createytvideo-uploadvideo.page';

describe('CreateytvideoUploadvideoPage', () => {
  let component: CreateytvideoUploadvideoPage;
  let fixture: ComponentFixture<CreateytvideoUploadvideoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateytvideoUploadvideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateytvideoUploadvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
