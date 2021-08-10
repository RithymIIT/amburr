import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BBuycaptionsCardaddedPage } from './b-buycaptions-cardadded.page';

describe('BBuycaptionsCardaddedPage', () => {
  let component: BBuycaptionsCardaddedPage;
  let fixture: ComponentFixture<BBuycaptionsCardaddedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BBuycaptionsCardaddedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BBuycaptionsCardaddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
