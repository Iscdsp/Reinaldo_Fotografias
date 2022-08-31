import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album10Component } from './album10.component';

describe('Album10Component', () => {
  let component: Album10Component;
  let fixture: ComponentFixture<Album10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
