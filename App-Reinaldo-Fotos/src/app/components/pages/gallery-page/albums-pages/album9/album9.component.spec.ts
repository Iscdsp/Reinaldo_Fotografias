import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album9Component } from './album9.component';

describe('Album9Component', () => {
  let component: Album9Component;
  let fixture: ComponentFixture<Album9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
