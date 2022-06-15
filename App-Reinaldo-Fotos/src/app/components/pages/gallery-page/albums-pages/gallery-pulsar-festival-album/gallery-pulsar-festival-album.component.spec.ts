import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPulsarFestivalAlbumComponent } from './gallery-pulsar-festival-album.component';

describe('GalleryPulsarFestivalAlbumComponent', () => {
  let component: GalleryPulsarFestivalAlbumComponent;
  let fixture: ComponentFixture<GalleryPulsarFestivalAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPulsarFestivalAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPulsarFestivalAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
