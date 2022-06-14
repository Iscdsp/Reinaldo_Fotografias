import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFooterEspecPageComponent } from './text-footer-espec-page.component';

describe('TextFooterEspecPageComponent', () => {
  let component: TextFooterEspecPageComponent;
  let fixture: ComponentFixture<TextFooterEspecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFooterEspecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFooterEspecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
