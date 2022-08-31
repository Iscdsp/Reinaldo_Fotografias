import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album5Component } from './album5.component';

describe('Album5Component', () => {
  let component: Album5Component;
  let fixture: ComponentFixture<Album5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
