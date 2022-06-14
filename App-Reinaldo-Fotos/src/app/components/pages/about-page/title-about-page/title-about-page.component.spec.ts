import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAboutPageComponent } from './title-about-page.component';

describe('TitleAboutPageComponent', () => {
  let component: TitleAboutPageComponent;
  let fixture: ComponentFixture<TitleAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAboutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
