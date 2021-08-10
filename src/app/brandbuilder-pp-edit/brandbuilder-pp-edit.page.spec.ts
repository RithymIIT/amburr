import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandbuilderPpEditPage } from './brandbuilder-pp-edit.page';

describe('BrandbuilderPpEditPage', () => {
  let component: BrandbuilderPpEditPage;
  let fixture: ComponentFixture<BrandbuilderPpEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandbuilderPpEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandbuilderPpEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
