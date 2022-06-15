import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryManifestacao29MAlbumComponent } from './gallery-manifestacao29-m-album.component';

describe('GalleryManifestacao29MAlbumComponent', () => {
  let component: GalleryManifestacao29MAlbumComponent;
  let fixture: ComponentFixture<GalleryManifestacao29MAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryManifestacao29MAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryManifestacao29MAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
