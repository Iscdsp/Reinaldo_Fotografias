import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album6Component } from './album6.component';

describe('Album6Component', () => {
  let component: Album6Component;
  let fixture: ComponentFixture<Album6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Album6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
