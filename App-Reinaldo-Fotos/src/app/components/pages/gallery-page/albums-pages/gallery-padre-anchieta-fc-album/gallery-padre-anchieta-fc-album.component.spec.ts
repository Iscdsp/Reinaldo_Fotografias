import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPadreAnchietaFCAlbumComponent } from './gallery-padre-anchieta-fc-album.component';

describe('GalleryPadreAnchietaFCAlbumComponent', () => {
  let component: GalleryPadreAnchietaFCAlbumComponent;
  let fixture: ComponentFixture<GalleryPadreAnchietaFCAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPadreAnchietaFCAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPadreAnchietaFCAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
