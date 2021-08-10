import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdeaGenerateTweetPage } from './idea-generate-tweet.page';

describe('IdeaGenerateTweetPage', () => {
  let component: IdeaGenerateTweetPage;
  let fixture: ComponentFixture<IdeaGenerateTweetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaGenerateTweetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdeaGenerateTweetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
