import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateytvideoScriptscreationPage } from './createytvideo-scriptscreation.page';

describe('CreateytvideoScriptscreationPage', () => {
  let component: CreateytvideoScriptscreationPage;
  let fixture: ComponentFixture<CreateytvideoScriptscreationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateytvideoScriptscreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateytvideoScriptscreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
