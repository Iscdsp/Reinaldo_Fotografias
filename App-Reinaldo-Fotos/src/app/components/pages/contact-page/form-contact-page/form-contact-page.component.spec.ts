import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactPageComponent } from './form-contact-page.component';

describe('FormContactPageComponent', () => {
  let component: FormContactPageComponent;
  let fixture: ComponentFixture<FormContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
