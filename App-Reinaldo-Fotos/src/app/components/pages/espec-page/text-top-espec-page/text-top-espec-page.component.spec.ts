import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTopEspecPageComponent } from './text-top-espec-page.component';

describe('TextTopEspecPageComponent', () => {
  let component: TextTopEspecPageComponent;
  let fixture: ComponentFixture<TextTopEspecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTopEspecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTopEspecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
