import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album7Component } from './album7.component';

describe('Album7Component', () => {
  let component: Album7Component;
  let fixture: ComponentFixture<Album7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
