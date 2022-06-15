import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyCrossfitBox160AlbumComponent } from './galley-crossfit-box160-album.component';

describe('GalleyCrossfitBox160AlbumComponent', () => {
  let component: GalleyCrossfitBox160AlbumComponent;
  let fixture: ComponentFixture<GalleyCrossfitBox160AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleyCrossfitBox160AlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleyCrossfitBox160AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
