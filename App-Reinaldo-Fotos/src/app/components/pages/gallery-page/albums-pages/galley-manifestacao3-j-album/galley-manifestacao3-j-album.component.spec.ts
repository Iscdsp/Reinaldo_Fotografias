import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyManifestacao3JAlbumComponent } from './galley-manifestacao3-j-album.component';

describe('GalleyManifestacao3JAlbumComponent', () => {
  let component: GalleyManifestacao3JAlbumComponent;
  let fixture: ComponentFixture<GalleyManifestacao3JAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleyManifestacao3JAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleyManifestacao3JAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
