import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateytvideoUploadingPage } from './createytvideo-uploading.page';

describe('CreateytvideoUploadingPage', () => {
  let component: CreateytvideoUploadingPage;
  let fixture: ComponentFixture<CreateytvideoUploadingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateytvideoUploadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateytvideoUploadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
