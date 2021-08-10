import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupCreatebrandsFilledPage } from './signup-createbrands-filled.page';

describe('SignupCreatebrandsFilledPage', () => {
  let component: SignupCreatebrandsFilledPage;
  let fixture: ComponentFixture<SignupCreatebrandsFilledPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCreatebrandsFilledPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupCreatebrandsFilledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
