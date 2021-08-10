import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandbuilderCoverEditPage } from './brandbuilder-cover-edit.page';

describe('BrandbuilderCoverEditPage', () => {
  let component: BrandbuilderCoverEditPage;
  let fixture: ComponentFixture<BrandbuilderCoverEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandbuilderCoverEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandbuilderCoverEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
