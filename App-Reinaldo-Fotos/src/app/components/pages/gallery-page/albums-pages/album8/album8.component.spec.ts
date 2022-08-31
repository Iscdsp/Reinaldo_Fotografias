import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album8Component } from './album8.component';

describe('Album8Component', () => {
  let component: Album8Component;
  let fixture: ComponentFixture<Album8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
