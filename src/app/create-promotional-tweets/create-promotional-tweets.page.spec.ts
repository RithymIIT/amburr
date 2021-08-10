import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePromotionalTweetsPage } from './create-promotional-tweets.page';

describe('CreatePromotionalTweetsPage', () => {
  let component: CreatePromotionalTweetsPage;
  let fixture: ComponentFixture<CreatePromotionalTweetsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePromotionalTweetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePromotionalTweetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
