import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryManifestacao19JAlbumComponent } from './gallery-manifestacao19-j-album.component';

describe('GalleryManifestacao19JAlbumComponent', () => {
  let component: GalleryManifestacao19JAlbumComponent;
  let fixture: ComponentFixture<GalleryManifestacao19JAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryManifestacao19JAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryManifestacao19JAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
