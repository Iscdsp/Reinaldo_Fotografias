import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleContactPageComponent } from './title-contact-page.component';

describe('TitleContactPageComponent', () => {
  let component: TitleContactPageComponent;
  let fixture: ComponentFixture<TitleContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleContactPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
