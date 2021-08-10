import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrosspromotionChooseVideoPage } from './crosspromotion-choose-video.page';

describe('CrosspromotionChooseVideoPage', () => {
  let component: CrosspromotionChooseVideoPage;
  let fixture: ComponentFixture<CrosspromotionChooseVideoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosspromotionChooseVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrosspromotionChooseVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
