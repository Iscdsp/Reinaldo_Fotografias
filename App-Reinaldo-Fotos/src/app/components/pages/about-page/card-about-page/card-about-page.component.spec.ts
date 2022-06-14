import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAboutPageComponent } from './card-about-page.component';

describe('CardAboutPageComponent', () => {
  let component: CardAboutPageComponent;
  let fixture: ComponentFixture<CardAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAboutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
