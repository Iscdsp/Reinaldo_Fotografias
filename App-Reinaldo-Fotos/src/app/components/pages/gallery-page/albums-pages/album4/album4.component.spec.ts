import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album4Component } from './album4.component';

describe('Album4Component', () => {
  let component: Album4Component;
  let fixture: ComponentFixture<Album4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
