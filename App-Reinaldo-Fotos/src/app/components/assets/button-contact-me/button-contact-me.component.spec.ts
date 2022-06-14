import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContactMeComponent } from './button-contact-me.component';

describe('ButtonContactMeComponent', () => {
  let component: ButtonContactMeComponent;
  let fixture: ComponentFixture<ButtonContactMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonContactMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
