import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrosspromotionMetadataPage } from './crosspromotion-metadata.page';

describe('CrosspromotionMetadataPage', () => {
  let component: CrosspromotionMetadataPage;
  let fixture: ComponentFixture<CrosspromotionMetadataPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosspromotionMetadataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrosspromotionMetadataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
