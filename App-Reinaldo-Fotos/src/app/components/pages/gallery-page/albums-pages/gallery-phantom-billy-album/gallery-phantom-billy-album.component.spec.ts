import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhantomBillyAlbumComponent } from './gallery-phantom-billy-album.component';

describe('GalleryPhantomBillyAlbumComponent', () => {
  let component: GalleryPhantomBillyAlbumComponent;
  let fixture: ComponentFixture<GalleryPhantomBillyAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPhantomBillyAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPhantomBillyAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
