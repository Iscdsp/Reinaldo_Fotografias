import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecPageComponent } from './espec-page.component';

describe('EspecPageComponent', () => {
  let component: EspecPageComponent;
  let fixture: ComponentFixture<EspecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
