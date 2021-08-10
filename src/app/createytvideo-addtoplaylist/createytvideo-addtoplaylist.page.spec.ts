import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateytvideoAddtoplaylistPage } from './createytvideo-addtoplaylist.page';

describe('CreateytvideoAddtoplaylistPage', () => {
  let component: CreateytvideoAddtoplaylistPage;
  let fixture: ComponentFixture<CreateytvideoAddtoplaylistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateytvideoAddtoplaylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateytvideoAddtoplaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
