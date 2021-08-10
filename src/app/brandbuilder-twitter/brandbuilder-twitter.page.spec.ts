import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandbuilderTwitterPage } from './brandbuilder-twitter.page';

describe('BrandbuilderTwitterPage', () => {
  let component: BrandbuilderTwitterPage;
  let fixture: ComponentFixture<BrandbuilderTwitterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandbuilderTwitterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandbuilderTwitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
