import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPagodeJuniorAlbumComponent } from './gallery-pagode-junior-album.component';

describe('GalleryPagodeJuniorAlbumComponent', () => {
  let component: GalleryPagodeJuniorAlbumComponent;
  let fixture: ComponentFixture<GalleryPagodeJuniorAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPagodeJuniorAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPagodeJuniorAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
