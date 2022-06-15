import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPracaPalmaresAlbumComponent } from './gallery-praca-palmares-album.component';

describe('GalleryPracaPalmaresAlbumComponent', () => {
  let component: GalleryPracaPalmaresAlbumComponent;
  let fixture: ComponentFixture<GalleryPracaPalmaresAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPracaPalmaresAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPracaPalmaresAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
