import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMiddleEspecPageComponent } from './text-middle-espec-page.component';

describe('TextMiddleEspecPageComponent', () => {
  let component: TextMiddleEspecPageComponent;
  let fixture: ComponentFixture<TextMiddleEspecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMiddleEspecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMiddleEspecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
