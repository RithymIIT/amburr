import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChennelTrailerSettingsPage } from './chennel-trailer-settings.page';

describe('ChennelTrailerSettingsPage', () => {
  let component: ChennelTrailerSettingsPage;
  let fixture: ComponentFixture<ChennelTrailerSettingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennelTrailerSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChennelTrailerSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
