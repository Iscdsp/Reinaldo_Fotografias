import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFunnyAboutPageComponent } from './card-funny-about-page.component';

describe('CardFunnyAboutPageComponent', () => {
  let component: CardFunnyAboutPageComponent;
  let fixture: ComponentFixture<CardFunnyAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFunnyAboutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFunnyAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
